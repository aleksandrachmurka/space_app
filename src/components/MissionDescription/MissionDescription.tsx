import React from 'react';
import { useMissionQuery } from '../../generated/graphql';
import { Launch } from '../../models';
import { loadingText, missionErrorText } from '../../utils/consts';
import './styles.css';

interface Props {
	missionId: Launch['mission_id'];
}

const className = 'missionDescription';

const MissionDescription: React.FC<Props> = ({ missionId }) => {
	const { data, error, loading } = useMissionQuery({
		variables: {
			id: missionId[0],
		},
	});

	const showError = error || !data;

	return (
		<td className={className}>
			{loading ? loadingText : showError ? missionErrorText : <p>{data.mission?.description}</p>}
		</td>
	);
};

export default MissionDescription;
