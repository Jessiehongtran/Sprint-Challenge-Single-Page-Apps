import React from 'react'
import Axios from 'axios';
import { Card } from 'semantic-ui-react'


export default function LocationCard (props) {
  console.log('props in Location List', props.data)

  return (
  <Card>
      <Card.Content>
        <Card.Header>{props.data.name}</Card.Header>
        <Card.Description>{props.data.type} - {props.data.dimension}</Card.Description>
        {/* <p>{eachLocation.resident}</p> */}
      </Card.Content>
  </Card>
  )
}
