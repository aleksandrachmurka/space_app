import React, { useEffect, useState } from 'react';
import { Launches, Launch } from '../../models';
import Checkbox from '../Checkbox/Checkbox';
import LaunchDate from '../LaunchDate/LaunchDate';
import MissionName from '../MissionName/MissionName';
import MissionDescription from '../MissionDescription/MissionDescription';
import './styles.css';

interface Props {
	launches: Launches;
}

const className = 'TableBody';

const TableBody: React.FC<Props> = ({ launches }) => {
	const [favourites, setFavourites] = useState(
		//@ts-ignore
		JSON.parse(localStorage.getItem('favouriteLaunches')) || []
	);

	useEffect(() => {
		if (favourites.length !== 0)
			localStorage.setItem('favouriteLaunches', JSON.stringify(favourites));
	}, [favourites]);

	const toggleFavourite = (flightNumber: Launch['flight_number']) => {
		const updatedFavourites = [...favourites, flightNumber];
		setFavourites(updatedFavourites);
	};

	const checkIfIsFavourite = (flightNumber: Launch['flight_number']) =>
		favourites.includes(flightNumber);

	return (
		<tbody className={className}>
			{launches!.map(
				launch =>
					launch && (
						<tr key={launch.flight_number}>
							<Checkbox
								favouritesHandler={() => toggleFavourite(launch.flight_number)}
								isFavourite={checkIfIsFavourite(launch.flight_number)}
							/>
							<LaunchDate date={launch.launch_date_utc} />
							<MissionName missionName={launch.mission_name} />
							{/* @ts-ignore */}
							<MissionDescription missionId={launch.mission_id} />
						</tr>
					)
			)}
		</tbody>
	);
};

export default TableBody;
