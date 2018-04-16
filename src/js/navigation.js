import { handleClick } from './helpers.js'

function renderNavigation() {

	const nav = document.createElement( 'nav' ),
		ul = document.createElement( 'ul' ),
		firstLi = document.createElement( 'li' ),
		firstA = document.createElement( 'a' ),
		secondLi = document.createElement( 'li' ),
		secondA = document.createElement( 'a' )

	firstA.setAttribute( 'href', '/' )
	firstA.addEventListener( 'click', handleClick )
	firstA.textContent = 'Ser.Vin'

	secondA.setAttribute( 'href', '/about-me' )
	secondA.addEventListener( 'click', handleClick )
	secondA.textContent = 'About me'

	firstLi.appendChild( firstA )
	secondLi.appendChild( secondA )

	ul.appendChild( firstLi )
	ul.appendChild( secondLi )

	nav.appendChild( ul )

	return nav

}

export default renderNavigation