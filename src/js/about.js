/* global TweenMax, Power4 */

import { scene } from './base.js'
import { setCurrent } from './helpers.js'

function renderAboutPage( transition ) {

	const li = document.querySelectorAll( 'li' )[ 1 ],
		div = document.createElement( 'div' ),
		h1 = document.createElement( 'h1' ),
		p = document.createElement( 'p' ),
		img = document.createElement( 'img' )

	setCurrent( li )

	h1.textContent = 'About Servin'

	p.textContent = 'A Front End Developer. Currently in his third year on Communication and Multimedia Design at the Amsterdam University of Applied Sciences. Before this I graduated from the MediaCollege Amsterdam where I did Interactive Design (Now renamed to MediaDesigner). On the MediaCollege I found my passion which I took with me to CMD. Next to school I love to play around with code in my free time. Playing with 3D and animations or just making an idea i had.'

	img.setAttribute( 'src', '/img/me.jpg' )
	img.setAttribute( 'alt', '' )

	div.classList.add( 'about' )

	div.appendChild( h1 )
	div.appendChild( p )
	div.appendChild( img )

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

function goToAbout( e ) {

	const secondLi = document.querySelectorAll( 'nav li' )[ 1 ],
		button = document.querySelector( '.back-button' ),
		section = document.querySelector( 'section' ),
		div = document.querySelector( 'section > div' )

	setCurrent( secondLi )

	TweenMax.to( [ button, div ], 1, { css: { transform: 'translateY( -5rem )', opacity: 0 }, ease: Power4.easeInOut, onComplete() {

		this.target.forEach( el => {

			if ( el ) {

				el.remove()

			}
		} )
		section.appendChild( renderAboutPage( true ) )

		scene.subTabArray.forEach( el => {

			const container = el.parent,
				info = container.info,
				{ x, y, z } = info.position

			TweenMax.to( container.rotation, 0.5, { x: 0, y: 0, z: 0, ease: Power4.easeInOut } )
			TweenMax.to( container.position, 0.5, { x: x, y: y, z: z, ease: Power4.easeInOut } )
			TweenMax.to( el.material, 0.5, { opacity: 0, ease: Power4.easeInOut } )

		} )

		scene.goRaycast = true

	} } )

	scene.tabArray.forEach( el => {

		el.parent.enableClick = false
		el.parent.enableFocus = false
		console.log( el.parent )

	} )

	if ( e.preventDefault ) {

		e.preventDefault()

	}

}

export default renderAboutPage
export {
	goToAbout
}