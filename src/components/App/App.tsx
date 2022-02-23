import React from 'react';
import './App.css';
import { useLaunchQuery } from '../../generated/graphql';
import { filterLaunches } from '../../utils/data';
import Table from '../Table/Table';
import { loadingText, dataErrorText } from '../../utils/consts';

const App = () => {
	const { data, error, loading } = useLaunchQuery();

	const showError = error || !data;

	return (
		<div className='App'>
			<h1>SPACE APP</h1>
			{loading ? loadingText : showError ? dataErrorText : <Table data={filterLaunches(data)} />}
		</div>
	);
};

export default App;
