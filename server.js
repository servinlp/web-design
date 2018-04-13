const express = require( 'express' ),
      path = require( 'path' ),
      ejs = require( 'ejs' ),
      app = express()

app.use( express.static( 'build' ) )
app.use( express.static( 'src' ) )
app.set( 'view engine', 'ejs' )

app.get( '*', ( req, res ) => {

        res.render( 'index' )

} )

app.listen( 8000, () => {

        console.log( 'you can find me at http://localhost8000' )

} )
