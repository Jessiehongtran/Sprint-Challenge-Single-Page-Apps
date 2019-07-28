import React from 'react'
import Axios from 'axios';
import LocationCard from "./LocationCard"
import EpisodeCard from "./EpisodeCard"
import {Card, Image, Icon} from "semantic-ui-react"


export default function CharacterCard (props) {
  console.log('props in CharacterCard', props.data)

  return (
    <Card.Group itemsPerRow={2}>
    <Card>
      <Image src={props.data.image} alt="Image"></Image>
      <Card.Content>
        <Card.Header>{props.data.name}</Card.Header>
        <Card.Meta>{props.data.species} {props.data.status}</Card.Meta>
        {/* <p>Location: <LocationCard /> </p> */}
        <Card.Description>Origin: </Card.Description>
        {/* <p>Episode: <EpisodeCard data={eachCharacter.episode} /> </p> */}
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user"/>
          Episodes
        </a>
      </Card.Content>
    </Card>
    </Card.Group>
  )
}
