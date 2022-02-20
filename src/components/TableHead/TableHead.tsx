import React from 'react';
import './styles.css';

interface Props {
	sortHandler: (key: string) => void;
}

const TableHead: React.FC<Props> = ({ sortHandler }) => (
	<thead>
		<tr>
			<th>Ulubiony</th>
			<th>
				Data
				<span className={'sort'} onClick={() => sortHandler('launch_date_utc')}>
					sortuj
				</span>
			</th>
			<th>
				Nazwa misji
				<span className={'sort'} onClick={() => sortHandler('mission_name')}>
					sortuj
				</span>
			</th>
			<th>Opis</th>
		</tr>
	</thead>
);

export default TableHead;
