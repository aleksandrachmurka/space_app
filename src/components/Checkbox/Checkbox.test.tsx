import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

const defaultProps = {
	isFavourite: false,
	onChangeHandler: () => {},
};

test('is not checked when isFavourite is false', () => {
	render(<Checkbox {...defaultProps} />);
	const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
	expect(checkbox.checked).toEqual(false);
});

test('is checked when isFavourite is true', () => {
	const props = {
		...defaultProps,
		isFavourite: true,
	};
	render(<Checkbox {...props} />);
	const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
	expect(checkbox.checked).toEqual(true);
});

test('calls onChangeHandler when clicked', () => {
	const onChangeHandler = jest.fn();
	const props = {
		...defaultProps,
		onChangeHandler,
	};
	render(<Checkbox {...props} />);
	const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
	fireEvent.click(checkbox);
	expect(onChangeHandler).toHaveBeenCalledTimes(1);
});
