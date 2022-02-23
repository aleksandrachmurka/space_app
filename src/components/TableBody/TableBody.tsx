import React, { useEffect, useState } from 'react';
import { Launches, Launch } from '../../models';
import Checkbox from '../Checkbox/Checkbox';
import LaunchDate from '../LaunchDate/LaunchDate';
import MissionName from '../MissionName/MissionName';
import MissionDescription from '../MissionDescription/MissionDescription';

interface Props {
	launches: Launches;
}

const TableBody: React.FC<Props> = ({ launches }) => {
	const [favouriteLaunches, setFavouriteLaunches] = useState(
		//@ts-ignore
		JSON.parse(localStorage.getItem('favouriteLaunches')) || []
	);

	useEffect(() => {
		if (favouriteLaunches.length !== 0)
			localStorage.setItem('favouriteLaunches', JSON.stringify(favouriteLaunches));
	}, [favouriteLaunches]);

	const toggleFavourite = (flightNumber: Launch['flight_number']) => {
		const updatedFavourites = [...favouriteLaunches, flightNumber];
		setFavouriteLaunches(updatedFavourites);
	};

	const checkIfIsFavourite = (flightNumber: Launch['flight_number']) =>
		favouriteLaunches.includes(flightNumber);

	return (
		<tbody>
			{launches.map(launch => (
				<tr key={launch.flight_number}>
					<Checkbox
						onChangeHandler={() => toggleFavourite(launch.flight_number)}
						isFavourite={checkIfIsFavourite(launch.flight_number)}
					/>
					<LaunchDate date={launch.launch_date_utc} />
					<MissionName missionName={launch.mission_name} />
					<MissionDescription missionId={launch.mission_id} />
				</tr>
			))}
		</tbody>
	);
};

export default TableBody;
