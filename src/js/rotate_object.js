import { scene } from './base.js'

const controlList = {},
	rotation = {
		ArrowLeft: [ 'y', -0.5 ],
		ArrowRight: [ 'y', 0.5 ],
		ArrowUp: [ 'z', -0.5 ],
		ArrowDown: [ 'z', 0.5 ]
	}

function allControlsDown( e ) {

	const key = e.key || e

	controlList[ key ] = true

	checkKeysPressed( e )

}

function allControlsUp( e ) {

	const key = e.key || e

	controlList[ key ] = false

}


function checkKeysPressed( e ) {

	if (
		e.key &&
		( 
			controlList.ArrowLeft ||
			controlList.ArrowRight ||
			controlList.ArrowUp ||
			controlList.ArrowDown
		) &&
		scene.tabArray[ scene.tabIndex ] &&
		!scene.tabArray[ scene.tabIndex ].parent.enableFocus
	) {

		const element = scene.tabArray[ scene.tabIndex ],
			r = rotation[ e.key ]

		element.parent.rotation[ r[ 0 ] ] += r[ 1 ]

	}

}

export {
	allControlsDown,
	allControlsUp
}