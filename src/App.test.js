import React from 'react';
import { render, shallow } from 'enzyme';
import { expect } from 'chai';
import Logo from './components/logo';


describe('App.js', () => {
	it('should render the logo', () => {
		const wrapper = render(<Logo />);

		expect(wrapper.attr('alt')).to.equal('Logo');
	})
});
