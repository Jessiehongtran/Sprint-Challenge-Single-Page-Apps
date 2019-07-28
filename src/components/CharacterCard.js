import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import LocationCard from "./LocationCard"
import EpisodeCard from "./EpisodeCard"
import {Card, Image, Icon} from "semantic-ui-react"

export default function CharacterCard (props) {
  console.log('props in CharacterCard', props.data)
  const [eachCharacter, setEachCharacter] = useState({});

  useEffect(() => {
    const id = props.data.id
    console.log('id', id)

    Axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response =>{
          console.log('response in CharacterCard', response)
          setEachCharacter(response.data)
        })
        .catch(err => {
          console.log('err in CharacterCard', err)
        })
  },[props.data.id]);

  return (
    <Card>
      <Image src={eachCharacter.image} alt="Image"></Image>
      <Card.Content>
        <Card.Header>{eachCharacter.name}</Card.Header>
        <Card.Meta>{eachCharacter.species} {eachCharacter.status}</Card.Meta>
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
  )
}
