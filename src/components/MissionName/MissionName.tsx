import React from 'react';
import { Launch } from '../../models';

interface Props {
	missionName: Launch['mission_name'];
}

const MissionName: React.FC<Props> = ({ missionName }) => <td data-testid='name'>{missionName}</td>;

export default MissionName;
