import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'
import className from 'classnames'

const LAUNCH_QUERY = gql`
    query LaunchQuery($flight_number: Int!){
        launch(flight_number: $flight_number){
            flight_number
            mission_name
            launch_date_local
            launch_success
            launch_year
            rocket{
                rocket_id
                rocket_name
                rocket_type
            }

        }
    }
`

export default class Launch extends Component {
    render() {
        let { flight_number } = this.props.match.params
        flight_number = parseInt(flight_number)
        return (
            <Fragment>
                <Query query={LAUNCH_QUERY} variables={{ flight_number }} >
                    {
                        ({ loading, error, data }) => {
                            if (loading) return <h4>Loading...</h4>
                            if (error) console.log(error)
                            console.log(data)
                            const {
                                mission_name,
                                flight_number,
                                launch_year,
                                launch_success,
                                launch_date_local,
                                rocket: {
                                    rocket_id,
                                    rocket_name,
                                    rocket_type
                                }
                            } = data.launch

                            return (
                                <Fragment>
                                    <h1 className="display-4 my-3">
                                        <span className="text-dark">Missio:</span>{mission_name}
                                    </h1>
                 
                                    <h4>Launch Detais</h4>
                                    <ul className="list-group">
                                        <li className="list-group-itens">
                                            Flight Number: {flight_number}
                                        </li>
                                        <li className="list-group-itens">
                                            Launch Year: {launch_year}
                                        </li>
                                        <li className="list-group-itens">
                                            Launch Successful: <span className={className({
                                                'text-success': launch_success,
                                                'text-danger': !launch_success
                                            })}>{launch_success?'Yes':'No'}</span>
                                        </li>
                                    </ul>

                                    <h4 className="my-3">Rocket Detais</h4>
                                    <ul className="list-group">
                                        <li className="list-group-itens">
                                            Rocket Id: {rocket_id}
                                        </li>
                                        <li className="list-group-itens">
                                            Rocket Name: {rocket_name}
                                        </li>
                                        <li className="list-group-itens">
                                            Rocket Type: {rocket_type}
                                        </li>
                                    </ul>
                                    <hr/>
                                    <Link to="/" className="btn btn-secondary">Back</Link>

                                </Fragment>
                            )
                        }
                    }
                </Query>

            </Fragment>
        )
    }
}
