import React from "react";
import { useParams } from "react-router-dom";
import UserFactory from "../../factories/UserFactory";
import useFetch from "../../utils/useFetch";

export default function User() {
    const {id} = useParams();
    const [data] = useFetch(`http://localhost:3000/user/${id}`, UserFactory, "api");

    return <>
    {JSON.stringify(data)}
    </>


}