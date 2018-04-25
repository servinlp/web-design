/* global TweenMax, Power4 */

import renderNavigation from './navigation.js'

function renderSide( link ) {

	const nav = renderNavigation( link ),
		section = document.createElement( 'section' ),
		div = renderPageTitle()

	section.appendChild( nav )
	section.appendChild( div )

	return section

}

function renderPageTitle( transition ) {

	const div = document.createElement( 'div' ),
		h1 = document.createElement( 'h1' )

	h1.textContent = 'Front End Developer'

	div.appendChild( h1 )

	if ( transition ) {

		TweenMax.fromTo(
			div,
			1,
			{ css:
				{
					transform: 'translateY( 5rem )',
					opacity: 0
				}
			},
			{
				css: {
					transform: 'translateY( 0 )',
					opacity: 1
				},
				ease: Power4.easeInOut
			}
		)

	}

	return div

}

export default renderSide
export {
	renderPageTitle
}