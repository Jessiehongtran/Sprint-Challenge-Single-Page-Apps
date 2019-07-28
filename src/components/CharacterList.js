import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import CharacterCard from "./CharacterCard"



export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    Axios
        .get(`https://rickandmortyapi.com/api/character/`)
        .then(response => {
          // console.log('response', response.data.results)
          setCharacter(response.data.results)
        })
        .catch(err=>{
          console.log('err', err)
        })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [])

  return <section className='character-list grid-view'>

        {character.map((data,i) =>(
          // console.log('data', data)
          <CharacterCard data ={data} key={i}/>
          
        ))}
    </section>

}
