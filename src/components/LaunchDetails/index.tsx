import React from 'react'
import { useFlightInfoQuery } from '../../generated/graphql'
import LaunchDetails from '../LaunchDetails/LaunchDetails'

const LaunchQueryContainer = () => {
    const {data, error, loading} = useFlightInfoQuery({variables: {id: "13"}})
    if(loading){
     return <div>Data is loading</div>   
    }
    if(error){
        return <div>There was an Error</div>
    }
    if(!data){
        return <div>Please Select Mission</div>
    }

    return <LaunchDetails data={data} />
}

export default LaunchQueryContainer