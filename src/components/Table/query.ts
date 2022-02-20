import { gql } from '@apollo/client';

export const QUERY_LAUNCH = gql`
	query Launch {
		launches(limit: 50) {
			flight_number
			mission_id
			mission_name
			launch_date_utc
		}
	}
`;

export const QUERY_MISSION = gql`
	query Mission($id: String!) {
		mission(id: $id) {
			description
		}
	}
`;
