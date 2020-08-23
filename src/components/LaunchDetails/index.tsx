import React, {useEffect} from 'react'
import { useFlightInfoQuery } from '../../generated/graphql'
import LaunchDetails from '../LaunchDetails/LaunchDetails'
import './styles.css'
interface Props {
    id: number
}

const LaunchQueryContainer = ({id} : Props) => {
    const {data, error, loading, refetch} = useFlightInfoQuery({variables: {id: String(id)}})

    useEffect(() =>{
        refetch()
    }, [id])

    if(loading){
     return <div className="centerClass">Data is loading</div>   
    }
    if(error){
        return <div className="centerClass">There was an Error</div>
    }
    if(!data){
        return <div className="centerClass">Please Select Mission</div>
    }

    return <LaunchDetails data={data} />
}

export default LaunchQueryContainer