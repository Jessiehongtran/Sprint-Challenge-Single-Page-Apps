import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import LocationCard from "./LocationCard"



export default function LocationList() {
    const [location, setLocation] = useState([])
    
    useEffect(()=>{
        Axios
            .get(`https://rickandmortyapi.com/api/location/`)
            .then(response =>{
                console.log('response in LocationList', response.data.results)
                setLocation(response.data.results)
            })
            .catch(err => {
                console.log('err', err)
            })

    },[])

    return (
        <div>
            {location.map((data,i) => (
                <LocationCard data={data} key={i} />
            ))
            }
        </div>
    )
}
