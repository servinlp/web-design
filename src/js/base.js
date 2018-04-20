/* global THREE */

const scene = new THREE.Scene(),
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ),
	renderer = new THREE.WebGLRenderer(),
	canvas = renderer.domElement,
	controls = new THREE.OrbitControls( camera )

camera.position.z = 20

renderer.setSize( window.innerWidth, window.innerHeight )
renderer.setPixelRatio( window.devicePixelRatio )
renderer.domElement.setAttribute( 'tabindex', 0 )

window.addEventListener( 'resize', resize )

const raycaster = new THREE.Raycaster(),
	mouse = new THREE.Vector2()

window.addEventListener( 'mousemove', onMouseMove )

function onMouseMove( event ) {

	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1

}

function resize() {

	renderer.setSize( window.innerWidth, window.innerHeight )
	renderer.setPixelRatio( window.devicePixelRatio )

	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()

}

export {
	canvas,
	scene,
	camera,
	renderer,
	raycaster,
	mouse
}