import React from 'react';
import { LaunchQuery } from '../../generated/graphql';
import { useSort } from '../../hooks/useSort';
import TableHead from '../TableHead/TableHead';
import TableBody from '../TableBody/TableBody';
import './styles.css';

interface Props {
	data: LaunchQuery;
}

const className = 'Table';

const Table: React.FC<Props> = ({ data }) => {
	const { sortedData, sortValue } = useSort(data.launches);

	return (
		<div className={`${className}__container`}>
			<table className={`${className}__table`}>
				<TableHead sortHandler={sortValue} />
				<TableBody launches={sortedData} />
			</table>
		</div>
	);
};

export default Table;
