import React, { useState, useEffect } from 'react'
import Axios from 'axios';

export default function CharacterCard (props) {
  console.log('props in CharacterCard', props.data)
  const [eachCharacter, setEachCharacter] = useState({});

  useEffect(() => {
    const id = props.data.id
    console.log('id', id)

    Axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response =>{
          // console.log('response in CharacterCard', response)
          setEachCharacter(response.data)
        })
        .catch(err => {
          console.log('err in CharacterCard', err)
        })
  },[props.data.id]);

  return (
  <span>todo: location
    <div>
      <img src={eachCharacter.image} alt="Image"></img>
    </div>
  </span>
  )
}
