import React, { useState, useEffect } from 'react'
import Axios from 'axios';

export default function LocationCard (props) {
  console.log('props in Location List', props.data)
  const [eachLocation, setEachLocation] = useState({});

  useEffect(()=>{
    const id = props.data.id
    console.log('id in LocationList', id)

    Axios
        .get(`https://rickandmortyapi.com/api/location/${id}`)
        .then(response =>{
          console.log('response in LocationList', response.data)
          setEachLocation(response.data)
        })
        .catch(err => {
          console.log('err in LocationList', err)
        })
  
  }, [props.data.id])


  return (
  <span>
    <p>{eachLocation.name}</p>
    <p>{eachLocation.type}</p>
    <p>{eachLocation.dimension}</p>
    <p>{eachLocation.resident}</p>
  </span>
  )
}
