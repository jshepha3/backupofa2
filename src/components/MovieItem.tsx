import { useNavigate } from 'react-router-dom'
import style from './MovieItem.module.css'

type MovieItemProps = {
  id: number

}

export default function MovieItem(props: MovieItemProps) {
  const { id } = props
  const navigate = useNavigate()

  return (
    <div className={style.movie}>
      <button className={style.button} onClick={() => navigate(`movie/${id}`)}>
        Start
      </button>
    </div>
  )
}
