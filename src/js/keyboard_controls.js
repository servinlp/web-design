const controlList = {}

function keyBoardControlsDown( e ) {

	const key = e.key || e

	console.log( key )
	controlList[ key ] = true

	checkKeysPressed()

	if ( e.preventDefault ) {

		e.preventDefault()

	}

}

function keyBoardControlsUp( e ) {

	controlList[ e.key ] = false

	e.preventDefault()

}

function checkKeysPressed() {

	console.log( controlList )

	if ( controlList.Tab && controlList.Shift ) {

		console.log( 'back' )

	} else if ( controlList.Tab ) {

		console.log( 'forward' )

	}

}

export {
	keyBoardControlsDown,
	keyBoardControlsUp
}