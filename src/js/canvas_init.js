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

function renderCanvas() {

	initCanvas()

	canvas.addEventListener( 'click', clickToProject )

	return canvas

}

function initCanvas() {

	const axesHelper = new THREE.AxesHelper( 5 )

	// scene.add( axesHelper )

	THREE.Mesh.prototype.focus = focus
	THREE.Mesh.prototype.setFocusState = setFocusState
	THREE.Mesh.prototype.getFocusState = getFocusState

	projects.forEach( el => {

		createProject( el )

	} )

	renderer.domElement.addEventListener( 'keydown', keyBoardControlsDown )
	renderer.domElement.addEventListener( 'keyup', keyBoardControlsUp )
	renderer.domElement.addEventListener( 'focus', () => {

		console.log( 'onfocus' )
		keyBoardControlsDown( 'Tab' )
		keyBoardControlsUp( 'Tab' )

	} )
	renderer.domElement.addEventListener( 'blur', () => {

		console.log( 'onblur', controlList )

		if ( controlList.Tab && controlList.Shift ) {

			scene.tabIndex = 0

		} else {

			scene.tabIndex -= 2

		}

		onBlurResetAll()

	} )

	renderer.animate( animate )

}

function createProject( obj ) {

	const container = new THREE.Object3D(),
		geometry = new THREE.BoxGeometry( obj.boxSize.x, obj.boxSize.y, obj.boxSize.z ),
		material = new THREE.MeshBasicMaterial( {
			// wireframe: true,
			color: 0x000000,
			// color: 0xffffff,
			transparent: true,
			opacity: 0
		} ),
		mesh = new THREE.Mesh( geometry, material )

	const MTLLoader = new THREE.MTLLoader()

	MTLLoader.setPath( obj.filePath )

	MTLLoader.load( obj.material, materials => {

		materials.preload()

		const OBJLoader = new THREE.OBJLoader()
		OBJLoader.setMaterials( materials )
		OBJLoader.setPath( obj.filePath )

		OBJLoader.load( obj.object, object => {

			// object.detail.loaderRootNode.scale.x = obj.scale
			// object.detail.loaderRootNode.scale.y = obj.scale
			// object.detail.loaderRootNode.scale.z = obj.scale

			object.scale.x = obj.scale
			object.scale.y = obj.scale
			object.scale.z = obj.scale

			container.add( object )

		}, () => {}, err => {

			// error
			console.log( err )

		} )

	}, () => {}, err => {

		// error
		console.log( err )

	} )

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
// export {
// 	projectsElements
// }