import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import EpisodeCard from "./EpisodeCard"


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
        {episode.map((episodes,n)=>(
            <EpisodeCard data ={episodes} key={n} />
        ))} 
    </section>

}