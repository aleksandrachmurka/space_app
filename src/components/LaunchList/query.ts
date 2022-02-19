import { gql } from '@apollo/client';

export const QUERY_LAUNCH_LIST = gql`
	query LaunchList {
		launches(limit: 10) {
			flight_number
			mission_name
			launch_date_utc
		}
	}
`;
