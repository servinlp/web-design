import { renderer, scene, camera, raycaster, mouse } from './base.js'
import { projectsElements } from './canvas_init.js'

function animate() {

	raycaster.setFromCamera( mouse, camera )

	const intersects = raycaster.intersectObjects( projectsElements )

	if ( intersects.length > 0 ) {

		for ( let i = 0; i < intersects.length; i++ ) {

			intersects[ i ].object.focus( true )

		}

	}

	projectsElements.forEach( el => {

		if ( !intersects.filter( l => l.object === el )[ 0 ] && el.focusState ) {

			el.focus( false )

		}

	} )

	renderer.render( scene, camera )

}

export default animate