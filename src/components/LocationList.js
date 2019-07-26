import React, { useEffect, useState } from 'react';
import Axios from 'axios';




export default function LocationList() {
    const [location, setLocation] = useState([])
    
    useEffect(()=>{
        Axios
            .get(`https://rickandmortyapi.com/api/locations/`)
            .then(response =>{
                console.log('response in LocationList', response)
            })


    })
}
