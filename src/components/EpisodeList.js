import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import EpisodeCard from "./CharacterCard"


export default function EpisodeList() {
  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    Axios
        .get(`https://rickandmortyapi.com/api/episode/`)
        .then(response => {
          console.log('response in EpisodeList', response.data.results)
          setEpisode(response.data.results)
        })
        .catch(err=>{
          console.log('err', err)
        })
    
  }, [])

  return <section>

      <h2>Episode List
        {episode.map((episodes,n)=>(
            <EpisodeCard data ={episodes} key={n} />
        ))} 
      </h2>
    </section>

}