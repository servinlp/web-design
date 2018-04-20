/* global TweenMax, Power4, Strong */

function focus( bool ) {

	if ( bool && !this.getFocusState() ) {

		focusOn( this )

	} else if ( !bool && this.getFocusState() ) {

		focusOff( this )

	}

	this.setFocusState( bool )

}

function focusOn( el ) {

	const posY = el.position.y,
		rotY = el.rotation.y

	TweenMax.to( el.position, 0.5, { y: posY + 1, ease: Strong.easeInOut } )
	TweenMax.to( el.rotation, 0.5, { y: rotY + ( Math.PI / 4 ), ease: Strong.easeInOut } )

}

function focusOff( el ) {

	const posy = el.position.y,
		rotY = el.rotation.y

	TweenMax.to( el.position, 0.5, { y: el.basePosition.y, ease: Power4.easeInOut } )
	TweenMax.to( el.rotation, 0.5, { y: 0, ease: Strong.easeInOut } )

}

function setFocusState( bool ) {

	this.focusState = bool

}

function getFocusState() {

	return this.focusState

}

export default focus
export {
	setFocusState,
	getFocusState
}