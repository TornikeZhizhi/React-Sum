import React from "react";
import {useParams}  from "react-router-dom";

const Home = () => {
    const params = useParams()

    return "Home 1 " + params.id
}


export default Home;