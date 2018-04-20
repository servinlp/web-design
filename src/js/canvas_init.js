/* global THREE */
import animate from './animate.js'
import { keyBoardControlsDown, keyBoardControlsUp } from './keyboard_controls.js'
import focus, { setFocusState, getFocusState } from './focus.js' 
import { renderer, scene, canvas } from './base.js'

const projectsElements = []

function renderCanvas() {

	initCanvas()

	return canvas

}

function initCanvas() {

	const axesHelper = new THREE.AxesHelper( 5 ),
		project = [
			{
				position: { x: 10, y: 0, z: 0 }
			},
			{
				position: { x: 0, y: -10, z: 0 }
			},
			{
				position: { x: 10, y: -10, z: 0 }
			}
		]

	scene.add( axesHelper )

	THREE.Mesh.prototype.focus = focus
	THREE.Mesh.prototype.setFocusState = setFocusState
	THREE.Mesh.prototype.getFocusState = getFocusState

	project.forEach( el => {

		createProject( el )

	} )

	renderer.domElement.addEventListener( 'keydown', keyBoardControlsDown )
	renderer.domElement.addEventListener( 'keyUp', keyBoardControlsUp )
	renderer.domElement.addEventListener( 'focus', () => {

		keyBoardControlsDown( 'Tab' )

	} )
	renderer.animate( animate )

}

function createProject( obj ) {

	const geometry = new THREE.BoxGeometry( 4, 4, 4 ),
		material = new THREE.MeshBasicMaterial( { color: 0xffeeee } ),
		mesh = new THREE.Mesh( geometry, material )

	mesh.translateX( obj.position.x )
	mesh.translateY( obj.position.y )
	mesh.translateZ( obj.position.z )

	scene.add( mesh )

	projectsElements.push( mesh )
	mesh.basePosition = obj.position

}

export default renderCanvas
export {
	projectsElements
}