import React from 'react';
import { useMissionQuery } from '../../generated/graphql';

interface Props {
	missionId: string;
}

const MissionDescription: React.FC<Props> = ({ missionId }) => {
	const { data, error, loading } = useMissionQuery({
		variables: {
			id: missionId[0],
		},
	});

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error || !data) {
		return <div>ERROR</div>;
	}

	return (
		<td>
			<p>{data!.mission!.description}</p>
		</td>
	);
};

export default MissionDescription;
