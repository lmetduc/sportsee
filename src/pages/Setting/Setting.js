import { useState, useEffect } from "react";

import { useParams } from 'react-router-dom';

export default function Setting(){
    
    const {id} = useParams()

    useEffect(() => {
        console.log(id)
    }, [])

  

    return <div></div>
}