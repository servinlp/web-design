import { handleClick } from './helpers.js'

function renderNav( active ) {

        const items = [
                {
                        title: 'Work',
                        link: '/'
                },
                {
                        title: 'About',
                        link: '/about'
                }
        ],
        nav = document.createElement( 'nav' ),
        ul = document.createElement( 'ul' )

        nav.appendChild( ul )

        items.forEach( el => {

                const li = document.createElement( 'li' ),
                        a = document.createElement( 'a' )

                a.textContent = el.title
                a.setAttribute( 'href', el.link )
                a.addEventListener( 'click', handleClick )

                if ( active && active === el.link ) {

                        li.setAttribute( 'aria-current', 'page' )

                }

                li.appendChild( a )
                ul.appendChild( li )

        } )

        return nav

}

export default renderNav
