export const filterLaunches = (data) => {
  const filteredLaunches = data.launches
  .filter(launch => launch.mission_id.length === 1)
  .slice(0, 10)
  
  return {...data, launches: filteredLaunches}
}