import projects from './projects.js'
import { scene } from './base.js'
import { thumbnailToProject } from './click_to_project.js'

function renderThumbnails() {

	const container = document.createElement( 'div' ),
		title = document.createElement( 'h2' ),

		// The filter to remove the current open item
		// scene.tabArray now has only one item in it so you can do 0
		p = projects.map( ( el, i ) => ( { ...el, index: i } ) )
			.filter( el => el.index !== scene.tabArray[ 0 ].parent.info.index ),

		objects = p.filter( el => el.object ),
		twoD = p.filter( el => el.texture ),

		randObject = objects[ Math.floor( Math.random() * objects.length ) ],
		randTwoD = twoD[ Math.floor( Math.random() * twoD.length ) ]

	title.textContent = 'View another project'

	container.classList.add( 'thumbnails' )

	container.appendChild( title )
	container.appendChild( renderProjectThumbnail( randObject ) )
	container.appendChild( renderProjectThumbnail( randTwoD ) )

	return container

}

function renderProjectThumbnail( info ) {

	const container = document.createElement( 'a' ),
		img = document.createElement( 'img' ),
		title = document.createElement( 'p' )

	title.textContent = info.title
	img.setAttribute( 'src', info.thumbnail )
	img.setAttribute( 'alt', '' )

	container.setAttribute( 'href', '#' )
	container.setAttribute( 'data-index', info.index )
	container.addEventListener( 'click', thumbnailToProject )

	container.appendChild( img )
	container.appendChild( title )

	return container

}

export default renderThumbnails