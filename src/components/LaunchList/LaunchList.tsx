import * as React from 'react';
import { LaunchListQuery } from '../../generated/graphql';
import { dateToLocale } from '../../utils/date';
import { timeToLocale } from '../../utils/time';
import './styles.css';

interface Props {
	data: LaunchListQuery;
}

const className = 'LaunchList';

const LaunchList: React.FC<Props> = ({ data }) => (
	<div className={className}>
		<h3>Space App</h3>
		<ol className={`${className}__list`}>
			{!!data.launches &&
				data.launches.map(
					(launch, i) =>
						!!launch && (
							<li key={i} className={`${className}__item`}>
								{launch.mission_name} ({dateToLocale(launch.launch_date_utc)}
								{timeToLocale(launch.launch_date_utc)})
							</li>
						)
				)}
		</ol>
	</div>
);

export default LaunchList;
