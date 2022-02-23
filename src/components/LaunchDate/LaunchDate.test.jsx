import React from 'react';
import { render, screen } from '@testing-library/react';
import LaunchDate from './LaunchDate';

const defaultProps = {
	date: '2010-06-04T18:45:00.000Z',
};

test('shows the formatted date', () => {
	render(<LaunchDate {...defaultProps} />);
	const date = screen.getByTestId('date');
	expect(date).toHaveTextContent('4 czerwca 2010, 20:45');
});