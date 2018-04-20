const path = require( 'path' ),
	express = require( 'express' ),
	app = express()

app.use( express.static( 'src' ) )

app.get( '*', ( req, res ) => {

	res.sendFile( path.join( __dirname, './index.html' ) )

} )

app.listen( 8000, () => {

	console.log( 'You can find it at http://localhost:8000' )

}  )