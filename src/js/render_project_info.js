/* global TweenMax, Power4 */

function projectInfo( info, transition ) {

	console.log( info )
	const container = document.createElement( 'div' ),
		h1 = document.createElement( 'h1' ),
		doel = document.createElement( 'h2' ),
		p = document.createElement( 'p' ),
		projectLink = document.createElement( 'a' ),
		tools = document.createElement( 'h2' ),
		toolsFragment = document.createDocumentFragment(),
		forP = document.createElement( 'p' ),
		forSpan = document.createElement( 'span' )

	h1.textContent = info.title
	doel.textContent = 'Doel:'
	p.innerHTML = info.text

	tools.textContent = 'Tools:'
	info.tools.forEach( el => {

		const a = document.createElement( 'a' )

		a.textContent = el[ 0 ]
		a.setAttribute( 'href', el[ 1 ] )
		a.setAttribute( 'target', '_black' )

		toolsFragment.appendChild( a )

	} )

	projectLink.textContent = 'View the project'
	projectLink.setAttribute( 'href', info.projectLink )
	projectLink.classList.add( 'to-project' )
	projectLink.setAttribute( 'target', '_black' )

	forSpan.textContent = 'For: '
	forP.appendChild( forSpan )
	forP.innerHTML += info.for
	forP.classList.add( 'for' )

	container.appendChild( h1 )
	container.appendChild( doel )
	container.appendChild( p )
	container.appendChild( forP )
	container.appendChild( projectLink )
	container.appendChild( tools )
	container.appendChild( toolsFragment )

	const arrowContainer = document.createElement( 'div' ),
		leftArrow = document.createElement( 'div' ),
		rightArrow = document.createElement( 'div' ),
		topArrow = document.createElement( 'div' ),
		bottomArrow = document.createElement( 'div' )

	leftArrow.textContent = '←'
	rightArrow.textContent = '→'
	topArrow.textContent = '↑'
	bottomArrow.textContent = '	↓'

	arrowContainer.appendChild( topArrow )
	arrowContainer.appendChild( leftArrow )
	arrowContainer.appendChild( bottomArrow )
	arrowContainer.appendChild( rightArrow )
	arrowContainer.classList.add( 'arrow-container' )

	container.appendChild( arrowContainer )

	if ( transition ) {

		TweenMax.fromTo(
			container,
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

	return container

}

export default projectInfo