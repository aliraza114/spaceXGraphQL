import React from 'react'
import { useLaunchesQuery } from '../../generated/graphql'
import Launch, {selfProp} from './Launch'

const LaunchContainer = (props: selfProp) => {
    const { data, error, loading } = useLaunchesQuery()

    if(loading){
        return <div>Data is Loading </div>
    }
    if(error || !data){
        return <div>Threre was an Error</div>
    }
    return <Launch data={data} {...props}/>
}

export default LaunchContainer


