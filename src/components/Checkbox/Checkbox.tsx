import React from 'react';

interface Props {
	isFavourite: boolean;
	favouritesHandler: () => void;
}

const Checkbox: React.FC<Props> = ({ isFavourite, favouritesHandler }) => (
	<td>
		<input type='checkbox' checked={isFavourite} onChange={favouritesHandler}></input>
	</td>
);

export default Checkbox;
