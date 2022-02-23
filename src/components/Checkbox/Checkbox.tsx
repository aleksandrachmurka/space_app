import React from 'react';

interface Props {
	isFavourite: boolean;
	onChangeHandler: () => void;
}

const Checkbox: React.FC<Props> = ({ isFavourite, onChangeHandler }) => (
	<td>
		<input type='checkbox' checked={isFavourite} onChange={onChangeHandler}></input>
	</td>
);

export default Checkbox;
