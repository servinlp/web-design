/* global TweenMax, Power4 */

import { scene } from './base.js'
import { setCurrent } from './helpers.js'
import { renderPageTitle } from './side_panel.js'

function renderBackButton( transition, tab ) {

	const button = document.createElement( 'button' ),
		firstDiv = document.createElement( 'div' ),
		secondDiv = document.createElement( 'div' )

	button.classList.add( 'back-button' )

	button.appendChild( firstDiv )
	button.appendChild( secondDiv )

	button.addEventListener( 'click', goBack )

	if ( transition ) {

		TweenMax.fromTo(
			button,
			1,
			{ css:
				{
					transform: 'translateY( 2rem )',
					opacity: 0
				}
			},
			{
				css: {
					transform: 'translateY( 0 )',
					opacity: 1
				},
				ease: Power4.easeInOut,
				onComplete() {

					if ( tab ) {

						button.focus()
				
					}

				}
			}
		)

	}

	return button

}

function goBack( e ) {

	const firstLi = document.querySelector( 'nav li' ),
		button = document.querySelector( '.back-button' ),
		section = document.querySelector( 'section' ),
		div = document.querySelector( 'section > div' )

	setCurrent( firstLi )

	TweenMax.to( [ button, div ], 1, { css: { transform: 'translateY( -5rem )', opacity: 0 }, ease: Power4.easeInOut, onComplete() {

		this.target.forEach( el => {

			if ( el ) {
				
				el.remove()

			}
		} )
		section.appendChild( renderPageTitle( true ) )

		scene.subTabArray.forEach( el => {

			const container = el.parent,
				info = container.info,
				{ x, y, z } = info.position

			container.enableFocus = true
			scene.tabArray = scene.subTabArray

			TweenMax.to( container.rotation, 0.5, { x: 0, y: 0, z: 0, ease: Power4.easeInOut } )
			TweenMax.to( container.position, 0.5, { x: x, y: y, z: z, ease: Power4.easeInOut } )
			TweenMax.to( el.material, 0.5, { opacity: 0, ease: Power4.easeInOut } )

		} )

		scene.goRaycast = true

	} } )

	// scene.tabIndex = 0

	scene.tabArray.forEach( el => {

		el.parent.enableClick = true
		el.parent.enableFocus = true

	} )

	if ( e.preventDefault ) {

		e.preventDefault()

	}

}

export default renderBackButton
export {
	goBack
}