import { renderer, scene, camera, raycaster, mouse } from './base.js'

function animate() {

	if ( scene.goRaycast ) {

		raycaster.setFromCamera( mouse, camera )

		const intersects = raycaster.intersectObjects( scene.tabArray )

		if ( intersects.length > 0 ) {

			for ( let i = 0; i < intersects.length; i++ ) {

				if ( intersects[ i ].object.parent.enableFocus ) {

					intersects[ i ].object.focus( true )

				}

			}

		}

		scene.tabArray.forEach( el => {

			if ( !intersects.filter( l => l.object === el )[ 0 ] && el.focusState ) {

				if ( el.parent.enableFocus && !el.tabFocus ) {

					el.focus( false )
					
				}

			}

		} )
		
	}

	renderer.render( scene, camera )

}

export default animate