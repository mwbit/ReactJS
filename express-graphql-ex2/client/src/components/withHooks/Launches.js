import React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

export default function Launches() {
  const { data, loading } = useQuery(LAUNCHES_QUERY, {});

  if (loading) {
    return <span>Loading...</span>;
  }
  console.log(data);

  return data.launches.map(launch => (
    <LaunchItem key={launch.flight_number} launch={launch} />
  ));
}
