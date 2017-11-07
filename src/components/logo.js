import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';

export default class Logo extends React.PureComponent {

	static propTypes = {

	};

	render() {
		const {

		} = this.props;

		return <img src={logo} className="App-logo" alt="Logo" />;
	}
}
