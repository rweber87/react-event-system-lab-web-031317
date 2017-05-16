import React from 'react';

class EyesOnMe extends React.Component{
	
	constructor(){
		super()

		this.handleFocusEvent = this.handleFocusEvent.bind(this)
		this.handleBlurEvent = this.handleBlurEvent.bind(this)
		
	}

	handleFocusEvent() {
		console.log('Good!')
	}

	handleBlurEvent() {
		console.log('Hey! Eyes on me!')
	}

	render() {
		return(
			<div>
				<button type="password" onFocus={this.handleFocusEvent} onBlur={this.handleBlurEvent}></button>
			</div>
		)
	}
}

export default EyesOnMe
