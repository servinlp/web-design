import routes from './routes.js'
import { handleClickEvents } from './helpers.js'

( function() {

        routes.goTo( location.pathname )
        handleClickEvents()

} )()
