/* global THREE */

const scene = new THREE.Scene(),
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / ( window.innerHeight * 1.5 ), 0.1, 1000 ),
	renderer = new THREE.WebGLRenderer(),
	canvas = renderer.domElement
	// controls = new THREE.OrbitControls( camera )

scene.goRaycast = true
scene.tabIndex = 0
scene.tabArray = []
scene.subTabArray = []

camera.position.z = 20
// controls.enableKeys = false

renderer.setSize( window.innerWidth, window.innerHeight * 1.5 )
renderer.setPixelRatio( window.devicePixelRatio )
renderer.domElement.setAttribute( 'tabindex', 0 )

window.addEventListener( 'resize', resize )

const raycaster = new THREE.Raycaster(),
	mouse = new THREE.Vector2()

window.addEventListener( 'mousemove', onMouseMove )

const hemisphereLight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 0.3 ),
	ambientLight = new THREE.AmbientLight( 0x404040 )

scene.add( ambientLight )
scene.add( hemisphereLight )

function onMouseMove( event ) {

	const body = document.body,
		html = document.documentElement,

		height = Math.max(
			body.scrollHeight, body.offsetHeight,
			html.clientHeight, html.scrollHeight, html.offsetHeight
		)


	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1
	mouse.y = - ( ( document.documentElement.scrollTop + event.clientY ) / height ) * 2 + 1

}

function resize() {

	renderer.setSize( window.innerWidth, window.innerHeight * 1.5 )
	renderer.setPixelRatio( window.devicePixelRatio )

	camera.aspect = window.innerWidth / ( window.innerHeight * 1.5 )
	camera.updateProjectionMatrix()

}

export {
	canvas,
	scene,
	camera,
	renderer,
	raycaster,
	mouse
	// controls
}