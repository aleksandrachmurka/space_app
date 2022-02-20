import React from 'react';

interface Props {
	isFavourite: boolean;
	favouritesHandler: () => void;
}

const Checkbox: React.FC<Props> = ({ isFavourite, favouritesHandler }) => (
	<input type='checkbox' checked={isFavourite} onChange={favouritesHandler}></input>
);

export default Checkbox;
