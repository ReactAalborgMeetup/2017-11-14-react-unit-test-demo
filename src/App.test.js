import React from 'react';
import { render, shallow, mount } from 'enzyme';
import { expect } from 'chai';
import Logo from './components/logo';
import App from './App';
import renderer from 'react-test-renderer';

describe('App.js', () => {
	it('should render the logo', () => {
		const wrapper = render(<Logo />);

		expect(wrapper.attr('alt')).to.equal('Logo');
	});

	it('should render the correct image', () => {
		const wrapper = render(<Logo />);

		expect(wrapper.attr('src')).to.equal('logo.svg');
	});

	it('should render the full App without problems', () => {
		const wrapper = shallow(<App crashLogo />);

		expect(wrapper.prop('className')).to.equal('App');
	});

	it('should crash the logo', () => {
		expect(() => {
			shallow(<Logo crash />);
		}).to.throw('We have been told to crash');
	});

	it('should render the same thing', () => {
		const tree = renderer.create(<App/>);
		expect(tree).to.matchSnapshot();
	})
});
