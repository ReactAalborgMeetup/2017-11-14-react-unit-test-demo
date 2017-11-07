import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';

export default class Logo extends React.PureComponent {

	static propTypes = {
		crash: PropTypes.bool,
	};

	render() {
		const {
			crash,
		} = this.props;

		if (crash) {
			throw new Error('We have been told to crash');
		}

		return <img src={logo} className="App-logo" alt="Logo" />;
	}
}
