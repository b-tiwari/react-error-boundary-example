import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
export class AddNumbers extends Component {
	render() {
		if (this.props.number1 < 0 || this.props.number2 < 0) {
			throw new Error('Sorry, I do not know yet how to work with negative numbers!!!');
		}
		return (
			<Alert bsStyle="success">
				<div> {this.props.number1 + this.props.number2}</div>
			</Alert>
		);
	}
}
