import React from 'react';
import { render, shallow, mount } from 'enzyme';
import { expect } from 'chai';
import Logo from './components/logo';
import App from './App';

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

	it('should start at the number 0', () => {
		const wrapper = mount(<App />);
		expect(wrapper.state('number')).to.equal(0);
	});

	it('should increment on click', () => {
		const wrapper = mount(<App />);

		wrapper.find('button').simulate('click');
		wrapper.find('button').simulate('click');

		expect(wrapper.state('number')).to.equal(2);
	});
});
