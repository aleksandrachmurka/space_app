export type Launches = Array<Launch>;

export interface Launch {
	__typename: 'Launch';
	flight_number: number;
	mission_id: Array<string>;
	mission_name: string;
	launch_date_utc: string;
}
