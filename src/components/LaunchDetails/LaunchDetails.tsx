import React from 'react'
import { FlightInfoQuery } from '../../generated/graphql'
import './styles.css'

interface Props {
    data: FlightInfoQuery
}

const LaunchProfile: React.FC<Props> = ({ data }) => {
    if (!data.launch) {
        return <div>No launch available</div>;
    }

    return (
        <div className="LaunchProfile">
            <div className="status">
                <span>Flight {data.launch.flight_number}: </span>
                {data.launch.launch_success ? (
                    <span className="success">Success</span>
                ) : (
                        <span className="failed">Failed</span>
                    )}
            </div>
            <h1 className="title">
                {data.launch.mission_name}
                {data.launch.rocket &&
                    ` (${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type})`}
            </h1>
            <p className="description">{data.launch.details}</p>
            {!!data.launch.links && !!data.launch.links.flickr_images && (
                <div className="image-list">
                    {data.launch.links.flickr_images.map(image =>
                        image ? <img src={image} className="image" key={image} alt="unable to find" /> : null,
                    )}
                </div>
            )}
        </div>
    );
};

export default LaunchProfile;