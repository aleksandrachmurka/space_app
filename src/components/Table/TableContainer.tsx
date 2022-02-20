import * as React from 'react';
import { useLaunchQuery } from '../../generated/graphql';
import { filterLaunches } from '../../utils/data';
import Table from './Table';

const TableContainer = () => {
	const { data, error, loading } = useLaunchQuery();

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error || !data) {
		return <div>ERROR</div>;
	}

	return <Table data={filterLaunches(data)} />;
};

export default TableContainer;
