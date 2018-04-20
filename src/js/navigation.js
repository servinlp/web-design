import { handleClick } from './helpers.js'

function renderNavigation( link ) {

	const nav = document.createElement( 'nav' ),
		ul = document.createElement( 'ul' ),
		links = [
			[ '/', 'Ser.Vin' ],
			[ '/about-me', 'About me' ]
		],
		fragment = document.createDocumentFragment()

	links.forEach( el => {

		const li = document.createElement( 'li' ),
			a = document.createElement( 'a' )

		a.setAttribute( 'href', el[ 0 ] )
		a.addEventListener( 'click', handleClick )
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