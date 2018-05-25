/* global TweenMax, Power4, Strong */

function focus( bool, force ) {

	if ( bool && ( force || !this.getFocusState() ) && this.parent.enableFocus ) {

		focusOn( this, force )

	} else if ( !bool && ( force || this.getFocusState() ) && this.parent.enableFocus ) {

		focusOff( this, force )

	}

	this.setFocusState( bool )

}

function focusOn( l, force ) {

	const el = l.parent

	const posY = el.position.y,
		rotY = el.rotation.y

	if ( force ) {

		l.material.wireframe = true
		l.material.color.setHex( 0xffffff )

		TweenMax.to( l.material, 0.5, {
			opacity: 1,
			ease: Strong.easeInOut
		} )

	}

	TweenMax.to( el.position, 0.5, { y: posY + 1, ease: Strong.easeInOut } )
	TweenMax.to( el.rotation, 0.5, { y: rotY + ( Math.PI / 4 ), ease: Strong.easeInOut } )

}

function focusOff( l, force ) {

	const el = l.parent

	if ( force ) {

		l.material.wireframe = false
		l.material.color.setHex( 0x000000 )
		l.material.opacity = 0

	}

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