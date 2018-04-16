import renderProjectThumbnails from './projectThumbnails.js'

function renderOverview() {

        const main = document.createElement( 'main' ),
                prev = document.createElement( 'button' ),
                next = document.createElement( 'button' ),
                ul = document.createElement( 'ul' ),
                projectThumbnails = renderProjectThumbnails()

        prev.textContent = '<'
        next.textContent = '>'

        prev.setAttribute( 'disabled', true )

        prev.addEventListener( 'click', function() {

                if ( this.hasAttribute( 'disabled' ) ) return

                ul.classList.remove( 'next-page' )

                next.removeAttribute( 'disabled' )
                this.setAttribute( 'disabled', true )

        } )

        next.addEventListener( 'click', function() {

                if ( this.hasAttribute( 'disabled' ) ) return

                ul.classList.add( 'next-page' )

                prev.removeAttribute( 'disabled' )
                this.setAttribute( 'disabled', true )

        } )

        ul.appendChild( projectThumbnails )
        main.appendChild( prev )
        main.appendChild( next )
        main.appendChild( ul )

        return main

}

export default renderOverview
