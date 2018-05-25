
function renderContactBar() {

	const aside = document.createElement( 'aside' ),
		p = document.createElement( 'p' ),
		phoneLink = document.createElement( 'a' ),
		emailLink = document.createElement( 'a' )

	aside.classList.add( 'contact' )

	p.textContent = 'Wanne get in contact?'

	phoneLink.textContent = '06 17719449'
	phoneLink.setAttribute( 'href', 'tel:0617719449' )

	emailLink.textContent = 'servin.nissen@gmail.com'
	emailLink.setAttribute( 'href', 'mailto:servin.nissen@gmail.com' )

	aside.appendChild( p )
	aside.appendChild( phoneLink )
	aside.appendChild( emailLink )

	return aside

}

export default renderContactBar