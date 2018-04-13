import projects from './projects.js'
import { handleClick } from './helpers.js'

function renderProjectThumbnails() {

        const fragment = document.createDocumentFragment()

        projects.forEach( el => {

                const li = document.createElement( 'li' ),
                        a = document.createElement( 'a' ),
                        h2 = document.createElement( 'h2' ),
                        img = document.createElement( 'img' ),
                        canvas = document.createElement( 'canvas' ),

                        p = document.createElement( 'p' ),
                        span = document.createElement( 'span' ),
                        innerSpan = document.createElement( 'span' ),
                        svg = document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' ),
                        path = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' )

                svg.setAttribute( 'viewBox', '0 0 31.49 31.49' )
                path.setAttribute( 'd', 'M21.205 5.007a1.112 1.112 0 0 0-1.587 0 1.12 1.12 0 0 0 0 1.571l8.047 8.047H1.111A1.106 1.106 0 0 0 0 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 0 0 1.587 0l9.952-9.952a1.093 1.093 0 0 0 0-1.571l-9.952-9.953z' )

                span.textContent = 'More'
                innerSpan.textContent = `about ${ el.title }`
                innerSpan.classList.add( 'hidden-from-view' )

                span.appendChild( innerSpan )
                svg.appendChild( path )
                p.appendChild( span )
                p.appendChild( svg )

                li.classList.add( el.tile )

                h2.textContent = el.title

                a.setAttribute( 'href', el.link )
                a.addEventListener( 'click', handleClick )

                img.setAttribute( 'src', el.image )
                img.setAttribute( 'alt', '' )

                a.appendChild( h2 )
                a.appendChild( img )
                a.appendChild( canvas )
                a.appendChild( p )
                li.appendChild( a )

                fragment.appendChild( li )

        } )

        return fragment

}

export default renderProjectThumbnails
