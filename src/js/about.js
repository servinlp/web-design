/* global TweenMax, Power4 */

import { scene } from './base.js'
import { setCurrent } from './helpers.js'
import { thumbnailToProject } from './click_to_project.js'

function renderAboutPage( transition ) {

	const li = document.querySelectorAll( 'li' )[ 1 ],
		div = document.createElement( 'div' ),
		h1 = document.createElement( 'h1' ),
		p = document.createElement( 'p' ),
		img = document.createElement( 'img' )

	setCurrent( li )

	h1.textContent = 'I am Servin'

	p.textContent = 'A Front End Developer who is passionate about all things web. Currently I am attending the Communication and Multimedia Design study at the Amsterdam University of Applied Sciences. I found my love/interest/drive for Web Development at my previous study where I first got exposed to code. I enjoy working with the latest in web technologies, with 3D and Node.js being my current interests.'

	img.setAttribute( 'src', '/image/me.jpg' )
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
		div = document.querySelector( 'section > div' ),
		thumbnails = document.querySelector( '.thumbnails' ),
		thumbnailsLinks = Array.from( thumbnails.querySelectorAll( 'a' ) ),
		contact = document.querySelector( '.contact' )

	thumbnailsLinks.forEach( el => {

		el.removeEventListener( 'click', thumbnailToProject )

	} )

	setCurrent( secondLi )

	TweenMax.to( [ button, div, thumbnails, contact ], 1, { css: { transform: 'translateY( -5rem )', opacity: 0 }, ease: Power4.easeInOut, onComplete() {

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