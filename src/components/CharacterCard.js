import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import LocationCard from "./LocationCard"
import EpisodeCard from "./EpisodeCard"
import {Card, Image, Name, Info} from "./Style"

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
    <span>
      <Image src={eachCharacter.image} alt="Image"></Image>
      <Name>{eachCharacter.name}</Name>
      <Info>{eachCharacter.type}</Info>
      {/* <p>Location: <LocationCard /> </p> */}
      <Info>Origin: </Info>
      {/* <p>Episode: <EpisodeCard data={eachCharacter.episode} /> </p> */}
    </span>
  </ Card>
  )
}
