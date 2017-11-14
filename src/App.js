import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Logo from './components/logo';

class App extends Component {

	static propTypes = {
		crashLogo: PropTypes.bool,
	};

	state = {
		number: 0,
	};

	handleIncrement = () => {
		this.setState(state => ({
			number: state.number + 1,
		}))
	};

	render() {
		const { crashLogo } = this.props;
		const { number } = this.state;

		return (
			<div className="App">
				<header className="App-header">
					<Logo crash={crashLogo} />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>

				<button onClick={this.handleIncrement}>Increment</button>
				<div style={{ fontSize: 100, fontWeight: 'bold'}}>
					{number}
				</div>
			</div>
		);
	}
}

export default App;
