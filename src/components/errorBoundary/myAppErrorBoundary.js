import React, { Component } from 'react';
import { Alert, OverlayTrigger, Label, Tooltip } from 'react-bootstrap';

export class MyAppErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.dismissError = false;
		this.state = {
			error: null,
			errorInfo: null
		};
	}

	componentDidCatch(error, errorInfo) {
		this.setState({ error, errorInfo });
	}

	render() {
		console.log('in render, dismissError=', this.dismissError);
		if (this.state.error) {
			return (
				<div>
					<Alert bsStyle="danger" onDismiss={this.dismissMe}>
						<h5>{this.state.error.message}</h5>
						<OverlayTrigger placement="bottom" overlay={this.tooltip()}>
							<Label bsStyle="default">Error Details</Label>
						</OverlayTrigger>
					</Alert>
				</div>
			);
		} else {
			return this.props.children;
		}
	}

	tooltip = () => {
		return (
			<Tooltip id="tooltip">
				<strong>Error stack</strong>
				<p>{JSON.stringify(this.state.errorInfo)}</p>
			</Tooltip>
		);
	};

	dismissMe = () => {
		this.setState({ error: null, errorInfo: null });
		this.props.onErrorDismiss();
	};
}
