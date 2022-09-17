import { useState, useEffect } from "react";

import { useParams } from 'react-router-dom';
import AverageSessionsFactory from "../../factories/AverageSessionsFactory";
import useFetch from "../../utils/useFetch";

export default function AverageSessions(){
    
    const {id} = useParams()
    const [data, isLoading] = useFetch(`http://localhost:3000/user/12/average-sessions`, AverageSessionsFactory, "api")

    return <>{JSON.stringify(data)}</>
}
