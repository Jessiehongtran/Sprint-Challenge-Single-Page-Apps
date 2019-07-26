import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom'





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

      <h2>TODO: `array.map()` over your state here!
        {character.map((data,i) =>(
          // console.log('data', data)
          <Link to ={`/character/${data.id}`} key={i}/>
          
        ))}
      </h2>
    </section>

}
