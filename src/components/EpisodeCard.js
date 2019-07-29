import React from 'react'
import { Card } from 'semantic-ui-react'

export default function EpisodeCard (props) {
  console.log('props in EpisodeCard', props.data)
  

  return (
  <Card>
      <Card.Content>
        <Card.Header>{props.data.episode} - {props.data.name}</Card.Header>
        <Card.Description>{props.data.air_date} </Card.Description>
      </Card.Content>
  </Card>
  )
}