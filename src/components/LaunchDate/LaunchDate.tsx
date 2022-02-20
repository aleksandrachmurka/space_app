import React from 'react';
import { dateToLocale } from '../../utils/date';
import { timeToLocale } from '../../utils/time';
import { Launch } from '../../models';

interface Props {
	date: Launch['launch_date_utc'];
}

const LaunchDate: React.FC<Props> = ({ date }) => (
	<span>{`${dateToLocale(date)}, ${timeToLocale(date)}`}</span>
);

export default LaunchDate;
