import React from 'react'
import { LaunchesQuery } from '../../generated/graphql'
import './styles.css'

export interface selfProp {
    changeFlight: (newId: number) => void
}

interface Props extends selfProp {
    data: LaunchesQuery
}

const Launch: React.FC<Props> = ({ data, changeFlight }) => {
    return (
        <div className="Launches" >
            <h3>All Space X Launches</h3>
            <ol className="LaunchesOL" >
                {!!data.launches && data.launches.map(
                    (launch, i) => !!launch && (
                        <li key={i} className="LaunchesItem"
                            onClick={() => changeFlight(launch.flight_number!)}
                        >
                            {launch.mission_name} - {launch.launch_year} ({JSON.stringify(launch.launch_success)})
                        </li>
                    )
                )}
            </ol>
        </div>
    )
}

export default Launch