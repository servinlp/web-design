/* global TweenMax, Power4 */
import projectInfo from './render_project_info.js'
import renderBackButton from './back_button.js'
import { scene, camera, raycaster, mouse } from './base.js'

function clickToProject() {

	scene.goRaycast = false

	raycaster.setFromCamera( mouse, camera )

	const intersects = raycaster.intersectObjects( scene.tabArray )

	if ( intersects.length > 0 && intersects[ 0 ].object.parent.enableClick ) {

		click( intersects[ 0 ].object )

		scene.tabArray = [ intersects[ 0 ].object ]
		scene.tabIndex = 0

	}

}

function click( element, tab ) {

	const allExept = scene.subTabArray.filter( el => el !== element ),
		nav = document.querySelector( 'section nav' ),
		section = document.querySelector( 'section' ),
		div = document.querySelector( 'section > div' ),
		button = document.querySelector( '.back-button' ),
		thumbnails = document.querySelector( '.thumbnails' ),
		contact = document.querySelector( '.contact' )

	// Scroll to the top
	if ( document.body.scrollTop !== 0 ) {

		TweenMax.to( document.body, 0.5, { scrollTop: 0 } )

	} else {

		TweenMax.to( document.documentElement, 0.5, { scrollTop: 0 } )

	}

	// If thumbnails, remove thumbnails and contact
	if ( thumbnails ) {

		const thumbnailsLinks = Array.from( thumbnails.querySelectorAll( 'a' ) )

		thumbnailsLinks.forEach( el => {

			el.removeEventListener( 'click', thumbnailToProject )

		} )

		TweenMax.to( [ thumbnails, contact ], 1, { css: { transform: 'translateY( -5rem )', opacity: 0 }, ease: Power4.easeInOut, onComplete() { 

			this.target.forEach( el => {

				if ( el ) {

					el.remove()

				}
			} )

		} } )

	}

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

	// On tab and enter you will have the wireframe focuessed
	if ( box.material.wireframe ) {

		box.material.wireframe = false
		box.material.color.setHex( 0x000000 )
		box.material.opacity = 0

	}

	container.enableFocus = false

	// If you click through from another project,
	// you need to show the element again
	TweenMax.to( box.material, 0.5, {
		opacity: 0,
		ease: Power4.easeInOut
	} )

	TweenMax.to( container.position, 0.5, {
		x,
		y,
		z,
		ease: Power4.easeInOut
	} )

	if ( info.rotateTo ) {

		const X = info.rotateTo.x,
			Y = info.rotateTo.y,
			Z = info.rotateTo.z

		TweenMax.to( container.rotation, 0.5, {
			x: X,
			y: Y,
			z: Z,
			ease: Power4.easeInOut
		} )

	}

}

function hideAllOthers( allExept ) {

	allExept.forEach( el => {

		const parent = el.parent

		TweenMax.to( el.material, 0.5, {
			opacity: 1,
			ease: Power4.easeInOut,
			onComplete() {

				parent.position.setZ( -30 )

			}
		} )

	} )

}

function thumbnailToProject( e ) {

	const target = e.target.nodeName === 'A' ? e.target : e.target.parentNode,
		index = parseInt( target.getAttribute( 'data-index' ) ),
		object = scene.subTabArray[ index ]

	scene.tabArray = [ object ]
	scene.tabIndex = 0

	click( object )

	e.preventDefault()

}

export default clickToProject
export {
	click,
	thumbnailToProject
}