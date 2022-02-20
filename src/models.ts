export type Launches = Array<Launch | null> | null | undefined;

export interface Launch {
	__typename?: 'Launch';
	flight_number?: number | null;
	mission_id?: Array<string | null> | null;
	mission_name?: string | null;
	launch_date_utc?: string | null;
}
