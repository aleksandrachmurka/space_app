import React from 'react';
import { dateToLocale } from '../../utils/date';
import { timeToLocale } from '../../utils/time';
import { Launch } from '../../models';

interface Props {
	date: Launch['launch_date_utc'];
}

const LaunchDate: React.FC<Props> = ({ date }) => (
	<td>
		<span>{`${dateToLocale(date)}, ${timeToLocale(date)}`}</span>
	</td>
);

export default LaunchDate;
