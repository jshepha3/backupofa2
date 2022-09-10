import { Routes, Route, Navigate } from 'react-router-dom'
import { Header, UserProvider } from './components'
import { Home, Login, SignUp, Movie, Session, Bookings, Game } from './pages' //Movie page becomes game page OR make new button, Session becomes history 
//add Game ^

import style from './App.module.css'

function App() {
  return (
    <UserProvider>
      <Header />
      <main className={style.main}> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:movieId" element={<Movie />} />
          <Route path="session/:sessionId" element={<Session />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="game/:movieId" element={<Game />} />
        </Routes>
      </main>
    </UserProvider>
  )
}
//add <Route path="game" element={<Game />} />

export default App
/*STEPS
Work backwards to add game in
<Route path="bookings" element={<Bookings />} /> works when only logged in so base of this
element={<Bookings             is from src/pages/
will need to add

import { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { UserContext } from '../context'
import { useLocalStorage } from '../hooks'                to newly created Game.tsx and

import style from './Bookings.module.css'

for the css so Game.module.css
refer back to bookings for guidelines
//test
Game button on Home page
import { GameItem } from '../components' add that to Home.tsx
Copy MovieItem.tsx and call it GameItem.tsx

return (
    <div className={style.movie}>
      <button className={style.button} onClick={() => navigate(`movie/${id}`)}>
        Start
      </button>
    </div>
  )

change navigate(`movie/${id}` to navigate(`game`) in GameItem.tsx and Start to Start Game

after that, should be able to just return GameItem in Home.tsx
add export { default as GameItem } from './GameItem' in index.ts in components
test

*/
