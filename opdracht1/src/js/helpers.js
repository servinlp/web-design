import routes from './routes.js'

function handleClickEvents() {

        const a = document.querySelectorAll( 'a' )

        a.forEach( el => el.addEventListener( 'click', handleClick ) )

}

function handleClick( e ) {

        const link = e.target.tagName === 'A' ? e.target : e.target.parentNode.parentNode

        if ( !link.href.includes( window.location.origin ) ) return

        e.preventDefault()

        if ( window.history ) {

                window.history.pushState( {}, '', link.getAttribute( 'href' ) )

        }

        const section = document.querySelector( 'section' ),
                main = document.querySelector( 'main' ),
                oldA = Array.from( document.querySelectorAll( 'a' ) )

        oldA.forEach( el => {

                el.removeEventListener( 'click', handleClick )

        } )

        section.remove()
        main.remove()

        window.scrollTo( 0, 0 )

        routes.goTo( link.getAttribute( 'href' ), true )

}

export {
        handleClickEvents,
        handleClick
}
