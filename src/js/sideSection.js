import renderNav from './nav.js'

function renderSection( navLink ) {

        const nav = renderNav( navLink ),
                section = document.createElement( 'section' ),
                article = document.createElement( 'article' ),
                div = document.createElement( 'div' ),
                h1 = document.createElement( 'h1' ),
                p = document.createElement( 'p' )

        h1.textContent = 'Level 30 Wizards'
        p.textContent = 'Welcom to our simple portfolio'

        div.appendChild( h1 )
        div.appendChild( p )

        article.appendChild( div )

        section.appendChild( nav )
        section.appendChild( article )

        return section

}

export default renderSection
