import { goBack } from './back_button.js'
import { goToAbout } from './about.js'

function renderNavigation( link ) {

	const nav = document.createElement( 'nav' ),
		ul = document.createElement( 'ul' ),
		links = [
			[ '/', 'Ser.Vin', goBack ],
			[ '/about-me', 'About me', goToAbout ]
		],
		fragment = document.createDocumentFragment()

	links.forEach( el => {

		const li = document.createElement( 'li' ),
			a = document.createElement( 'a' )

		a.setAttribute( 'href', el[ 0 ] )
		a.addEventListener( 'click', el[ 2 ] )
		a.textContent = el[ 1 ]

		if ( el[ 0 ] === link ) {

			li.setAttribute( 'aria-current', 'page' )

		}

		li.appendChild( a )
		fragment.appendChild( li )

	} )

	ul.appendChild( fragment )
	nav.appendChild( ul )

	return nav

}

export default renderNavigation