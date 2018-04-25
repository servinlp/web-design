import { scene } from './base.js'
import { click } from './click_to_project.js'

const controlList = {},
	rotation = {
		ArrowLeft: [ 'y', -0.5 ],
		ArrowRight: [ 'y', 0.5 ],
		ArrowUp: [ 'z', -0.5 ],
		ArrowDown: [ 'z', 0.5 ]
	}

function keyBoardControlsDown( e ) {

	const key = e.key || e

	controlList[ key ] = true

	checkKeysPressed( e )

}

function keyBoardControlsUp( e ) {

	const key = e.key || e

	controlList[ key ] = false

}

function checkKeysPressed( e ) {

	console.log( controlList )
	let prevent = false

	if ( e.key && ( controlList.ArrowLeft || controlList.ArrowRight || controlList.ArrowUp || controlList.ArrowDown ) && scene.tabArray[ scene.tabIndex ] ) {

		console.log( 'run', scene.tabArray[ scene.tabIndex ] )
		const element = scene.tabArray[ scene.tabIndex ],
			r = rotation[ e.key ]

		element.parent.rotation[ r[ 0 ] ] += r[ 1 ]

		prevent = true

	}

	// - 1 because once you click on Enter
	// the scene.tabIndex will have already been update to the next
	if ( controlList.Enter && scene.tabArray[ scene.tabIndex - 1 ] ) {

		console.log( 'click' )
		const element = scene.tabArray[ scene.tabIndex - 1 ]
		// allExept = scene.tabArray.filter( el => el !== element )

		click( element )

		scene.tabArray = [ element ]
		scene.tabIndex = 0
		// element.parent.enebleFocus = false

	}

	if ( controlList.Tab && controlList.Shift ) {

		console.log( 'back' )

		if ( scene.tabArray[ scene.tabIndex - 1 ] ) {

			scene.tabArray[ scene.tabIndex - 1 ].tabFocus = false
			scene.tabArray[ scene.tabIndex - 1 ].focus( false )

		}

		if ( scene.tabArray[ scene.tabIndex - 2 ] ) {

			scene.tabArray[ scene.tabIndex - 2 ].tabFocus = true
			scene.tabArray[ scene.tabIndex - 2 ].focus( true, true )
			prevent = true

		}

		scene.tabIndex -= 1

	} else if ( controlList.Tab ) {

		console.log( 'forward' )

		if ( scene.tabArray[ scene.tabIndex - 1 ] ) {

			scene.tabArray[ scene.tabIndex - 1 ].tabFocus = false
			scene.tabArray[ scene.tabIndex - 1 ].focus( false )

		}

		if ( scene.tabArray[ scene.tabIndex ] ) {

			scene.tabArray[ scene.tabIndex ].tabFocus = true
			scene.tabArray[ scene.tabIndex ].focus( true, true )
			prevent = true

		}

		scene.tabIndex += 1

	}

	if ( e.preventDefault && prevent ) {

		console.log( 'run' )
		e.preventDefault()

	}

}

function onBlurResetAll() {

	for ( const key in controlList ) {

		controlList[ key ] = false

	}

}

export {
	keyBoardControlsDown,
	keyBoardControlsUp,
	onBlurResetAll,
	controlList
}