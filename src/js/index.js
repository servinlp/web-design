/* global Stats */
import routes from './routes.js'

( function() {

	routes.goTo( '/' )

	const stats = new Stats()
	stats.showPanel( 0 ) // 0: fps, 1: ms, 2: mb, 3+: custom
	document.body.appendChild( stats.dom )

	stats.dom.style.right = 0
	stats.dom.style.bottom = 0
	stats.dom.style.left = 'initial'
	stats.dom.style.top = 'initial'

	function animate() {

		stats.begin()

		// monitored code goes here

		stats.end()

		requestAnimationFrame( animate )

	}

	requestAnimationFrame( animate )

} )()