import { scene } from './base.js'

const allControlList = {},
	rotation = {
		ArrowLeft: [ 'y', -0.5 ],
		ArrowRight: [ 'y', 0.5 ],
		ArrowUp: [ 'z', -0.5 ],
		ArrowDown: [ 'z', 0.5 ]
	}

function allControlsDown( e ) {

	const key = e.key || e

	allControlList[ key ] = true

	checkKeysPressed( e )

}

function allControlsUp( e ) {

	const key = e.key || e

	allControlList[ key ] = false

}


function checkKeysPressed( e ) {

	if (
		e.key &&
		( 
			allControlList.ArrowLeft ||
			allControlList.ArrowRight ||
			allControlList.ArrowUp ||
			allControlList.ArrowDown
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
	allControlsUp,
	allControlList,
	rotation
}