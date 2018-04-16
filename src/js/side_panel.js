import renderNavigation from './navigation.js'

function renderSide() {

	const nav = renderNavigation(),
		section = document.createElement( 'section' ),
		h1 = document.createElement( 'h1' )

	h1.textContent = 'Front End Developer'

	section.appendChild( nav )
	section.appendChild( h1 )

	return section

}

export default renderSide