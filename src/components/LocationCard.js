import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { Card } from 'semantic-ui-react'


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
  <Card>
      <Card.Content>
        <Card.Header>{eachLocation.name}</Card.Header>
        <Card.Description>{eachLocation.type} - {eachLocation.dimension}</Card.Description>
        {/* <p>{eachLocation.resident}</p> */}
      </Card.Content>
  </Card>
  )
}
