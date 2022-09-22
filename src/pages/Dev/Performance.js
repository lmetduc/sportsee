
import { useParams } from 'react-router-dom';
import PerformanceFactory from "../../factories/PerformanceFactory";
import useFetch from "../../utils/useFetch";


export default function Performance(){
    
    const {id} = useParams()
    const [data] = useFetch(`http://localhost:3000/user/${id}/performance`, PerformanceFactory, "api");
  

    return <> {JSON.stringify(data)}</>
}