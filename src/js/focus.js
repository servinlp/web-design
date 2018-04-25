/* global TweenMax, Power4, Strong */

function focus( bool, force ) {

	if ( bool && ( force || !this.getFocusState() ) && this.parent.enableFocus ) {

		focusOn( this )

	} else if ( !bool && ( force || this.getFocusState() ) && this.parent.enableFocus ) {

		focusOff( this )

	}

	this.setFocusState( bool )

}

function focusOn( l ) {

	const el = l.parent

	const posY = el.position.y,
		rotY = el.rotation.y

	TweenMax.to( el.position, 0.5, { y: posY + 1, ease: Strong.easeInOut } )
	TweenMax.to( el.rotation, 0.5, { y: rotY + ( Math.PI / 4 ), ease: Strong.easeInOut } )

}

function focusOff( l ) {

	const el = l.parent

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