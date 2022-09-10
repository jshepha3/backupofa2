import { useEffect, useState } from 'react'
import { MovieItem } from '../components'
import type { Movie } from '../types'
import http from '../utils/http'
import movies from '../data/movies.json'

import style from './Home.module.css'
import GameItem from '../components/GameItem'

export default function Home() {

  return (
    <div className={style.container}>
      {movies.length === 0 && <p>Fetching movies...</p>}
      {movies.map(({ id }) => (
        <MovieItem key={id} id={id}/>
      ))}
      {movies.map(({ id }) => (
        <GameItem key={id} id={id}/>
      ))}
    </div>
  )
}
//test