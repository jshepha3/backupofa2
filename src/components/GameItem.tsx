import { useNavigate } from 'react-router-dom'
import style from './GameItem.module.css'

type GameItemProps = {
  id: number

}

export default function GameItem(props: GameItemProps) {
  const { id } = props
  const navigate = useNavigate()

  return (
    <div className={style.game}>
      <button className={style.button} onClick={() => navigate(`game/${id}`)}>
        Start Game
      </button>
    </div>
  )
}//test