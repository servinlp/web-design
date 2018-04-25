/* global TweenMax, Power4 */
import projectInfo from './render_project_info.js'
import renderBackButton from './back_button.js'
import { scene, camera, raycaster, mouse } from './base.js'

function clickToProject( e ) {

	scene.goRaycast = false

	raycaster.setFromCamera( mouse, camera )

	const intersects = raycaster.intersectObjects( scene.tabArray )

	if ( intersects.length > 0 && intersects[ 0 ].object.parent.enableClick ) {

		click( intersects[ 0 ].object )

	}

}

function click( element, tab ) {

	const allExept = scene.tabArray.filter( el => el !== element ),
		nav = document.querySelector( 'section nav' ),
		section = document.querySelector( 'section' ),
		div = document.querySelector( 'section > div' ),
		button = document.querySelector( '.back-button' )

	hideAllOthers( allExept )
	goToProject( element )

	if ( button ) {

		TweenMax.to( button, 1, { css: { transform: 'translateY( -5rem )', opacity: 0 }, ease: Power4.easeInOut, onComplete() { 
			
			this.target.remove()

		} } )

	}

	TweenMax.to( div, 1, { css: { transform: 'translateY( -5rem )', opacity: 0 }, ease: Power4.easeInOut, onComplete() {

		this.target.remove()
		section.appendChild( projectInfo( element.parent.info, true ) )
		nav.appendChild( renderBackButton( true, tab ) )

	} } )

}

function goToProject( box ) {

	const container = box.parent,
		info = container.info,
		{ x, y, z } = info.positionTo

	box.material.wireframe = false
	box.material.color.setHex( 0x000000 )
	box.material.opacity = 0

	container.enableFocus = false

	TweenMax.to( container.position, 0.5, { x: x, y: y, z: z, ease: Power4.easeInOut } )

}

function hideAllOthers( allExept ) {

	allExept.forEach( el => {

		const parent = el.parent

		TweenMax.to( el.material, 0.5, { opacity: 1, ease: Power4.easeInOut, onComplete: () => {

			parent.position.setZ( -30 )

		} } )

	} )

}

export default clickToProject
export {
	click
}