import React from 'react';
import { render, screen } from '@testing-library/react';
import MissionName from './MissionName';

const defaultProps = {
	missionName: 'COTS 1',
};

test('shows the mission name', () => {
	render(<MissionName {...defaultProps} />);
	const name = screen.getByTestId('name');
	expect(name).toHaveTextContent('COTS 1');
});
