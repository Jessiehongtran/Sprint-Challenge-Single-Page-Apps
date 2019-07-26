import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import EpisodeCard from "./CharacterCard"


export default function EpisodeList() {
  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    Axios
        .get(`https://rickandmortyapi.com/api/episode/`)
        .then(response => {
          console.log('response', response.data.results)
          setEpisode(response.data.results)
        })
        .catch(err=>{
          console.log('err', err)
        })
    
  }, [])

  return <section>

      <h2>
        {episode.map((data,i)=>(
            <EpisodeCard data ={data} key={i} />
        ))}
      </h2>
    </section>

}