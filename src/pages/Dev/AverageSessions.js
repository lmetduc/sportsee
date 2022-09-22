

import { useParams } from 'react-router-dom';
import AverageSessionsFactory from "../../factories/AverageSessionsFactory";
import useFetch from "../../utils/useFetch";

export default function AverageSessions(){
    
    const {id} = useParams()
    const [data] = useFetch(`http://localhost:3000/user/${id}/average-sessions`, AverageSessionsFactory, "api")

    return <>{JSON.stringify(data)}</>
}
