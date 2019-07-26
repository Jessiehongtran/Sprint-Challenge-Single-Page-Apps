import React, { useState, useEffect } from 'react'
import Axios from 'axios';

export default function EpisodeCard (props) {
  console.log('props in Episode List', props.data)
  const [eachEpisode, setEachEpisode] = useState({});

  

  return (
  <span>
    Episode List
  </span>
  )
}