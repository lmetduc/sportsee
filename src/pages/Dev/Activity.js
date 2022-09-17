
import { useState, useEffect } from "react";

import { useParams } from 'react-router-dom';
import ActivityFactory from "../../factories/ActivityFactory";
import useFetch from "../../utils/useFetch";

export default function Activity(){
    
    const {id} = useParams()

    const [data, isLoading] = useFetch(`http://localhost:3000/user/${id}/activity`, ActivityFactory, "api" )

    useEffect(() => {
        console.log(data)
    }, [data])
  

    return <>
        {JSON.stringify(data)}
    </>
}