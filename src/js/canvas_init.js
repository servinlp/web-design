/* global THREE */
import projects from './projects.js'
import animate from './animate.js'
import clickToProject from './click_to_project.js'
import focus, { setFocusState, getFocusState } from './focus.js'
import { renderer, scene, canvas } from './base.js'
import { keyBoardControlsDown,
	keyBoardControlsUp,
	onBlurResetAll,
	controlList
} from './keyboard_controls.js'
import {
	allControlsDown,
	allControlsUp,
	allControlList
} from './rotate_object.js'

function renderCanvas() {

	initCanvas()

	canvas.addEventListener( 'click', clickToProject )

	return canvas

}

function initCanvas() {

	THREE.Mesh.prototype.focus = focus
	THREE.Mesh.prototype.setFocusState = setFocusState
	THREE.Mesh.prototype.getFocusState = getFocusState

	projects.map( ( el, i ) => ( { ...el, index: i } ) ).forEach( el => {

		createProject( el )

	} )

	window.addEventListener( 'keydown', allControlsDown )
	window.addEventListener( 'keyup', allControlsUp )

	renderer.domElement.addEventListener( 'focus', () => {

		if ( allControlList.Tab !== undefined ) {

			keyBoardControlsDown( 'Tab' )
			keyBoardControlsUp( 'Tab' )

		}

	} )

	renderer.domElement.addEventListener( 'blur', () => {

		if ( controlList.Tab && controlList.Shift ) {

			scene.tabIndex = 0

		} else if ( controlList.Tab ) {

			scene.tabIndex -= 2

		}

		onBlurResetAll()

	} )

	renderer.domElement.addEventListener( 'keydown', keyBoardControlsDown )
	renderer.domElement.addEventListener( 'keyup', keyBoardControlsUp )

	renderer.animate( animate )

}

function createProject( obj ) {

	const container = new THREE.Object3D(),
		geometry = new THREE.BoxGeometry( obj.boxSize.x, obj.boxSize.y, obj.boxSize.z ),
		material = new THREE.MeshBasicMaterial( {
			color: 0x000000,
			transparent: true,
			opacity: 0
		} ),
		mesh = new THREE.Mesh( geometry, material )

	if ( obj.material && obj.object ) {

		const MTLLoader = new THREE.MTLLoader()

		MTLLoader.setPath( obj.filePath )

		MTLLoader.load( obj.material, materials => {

			materials.preload()

			const OBJLoader = new THREE.OBJLoader()
			OBJLoader.setMaterials( materials )
			OBJLoader.setPath( obj.filePath )

			OBJLoader.load( obj.object, object => {

				object.scale.x = obj.scale
				object.scale.y = obj.scale
				object.scale.z = obj.scale

				object.myObject = true

				container.add( object )

			}, () => {}, err => {

				console.error( err )

			} )

		}, () => {}, err => {

			console.error( err )

		} )

	} else {

		const boxGeometry = new THREE.BoxGeometry(
				obj.textureBoxSize.x,
				obj.textureBoxSize.y,
				obj.textureBoxSize.z
			),
			boxMaterial = new THREE.MeshBasicMaterial( {
				map: THREE.ImageUtils.loadTexture( obj.texture )
			} ),
			box = new THREE.Mesh( boxGeometry, boxMaterial )

		box.myObject = true

		container.add( box )

	}

	container.translateX( obj.position.x )
	container.translateY( obj.position.y )
	container.translateZ( obj.position.z )

	container.name = obj.title
	container.info = obj
	container.enableFocus = true
	container.enableClick = true
	mesh.tabFocus = false

	container.add( mesh )

	scene.tabArray.push( mesh )
	scene.subTabArray.push( mesh )
	container.basePosition = obj.position

	scene.add( container )

}

export default renderCanvas