import React, { Component } from 'react';
import { AddNumbers } from '../addNumbers/addNumbers';
import { MyAppErrorBoundary } from '../errorBoundary/myAppErrorBoundary';
import { Button, Label, ButtonGroup, Grid, Row, Col } from 'react-bootstrap';
import NumericInput from 'react-numeric-input';
import './additionCalclulator.less';

export class AdditionCalculator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			number2: 1,
			number1: 20,
			dismissAnswerError: true
		};
	}

	render() {
		return (
			<Grid>
				<Row>
					<Col xs={12} align="center">
						Elementry Addition Calculator
					</Col>
				</Row>
				<Row>
					<Col xs={12} className="calciNumCol" align="center">
						<span className="calciNumInput">{this.state.number1}</span>
						<label className="calciOperatorCol"> + </label>
						<span className="calciNumInput">
							<NumericInput value={this.state.number2} onChange={this.numericInputChange} size={4} />
						</span>
					</Col>
				</Row>
				<Row>
					<Col xs={12} className="calciAnsLabelCol">
						<Label className="calciAnsLabel"> Your Answer Is: </Label>
					</Col>
				</Row>
				<Row>
					<Col xs={12} className="calciAnsCol">
						<MyAppErrorBoundary onErrorDismiss={this.onErrorDismiss}>
							<AddNumbers number1={this.state.number1} number2={this.state.number2} />
						</MyAppErrorBoundary>
					</Col>
				</Row>
			</Grid>
		);
	}

	onErrorDismiss = () => {
		this.setState({
			number2: 1
		});
	};

	numericInputChange = valAsNumber => {
		this.setState({
			number2: valAsNumber
		});
	};

	decrementDivisor = evnt => {
		const val = evnt.target.value;
		console.log(`Value = ${val}`);

		this.setState({
			number2: this.state.number2 - 1,
			dismissAnswerError: true
		});
	};

	incrementDivisor = evnt => {
		this.setState({
			number2: this.state.number2 + 1,
			dismissAnswerError: true
		});
	};
}
