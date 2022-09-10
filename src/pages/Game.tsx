import { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { UserContext } from '../context'
import { useLocalStorage } from '../hooks'

export default function Bookings() {
    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    const [bookings] = useLocalStorage<Record<string, number[]>>('bookings', {})
    if (!user) return <Navigate to="/login" />
    enum PLAYER {
        BLACK,
        WHITE,
      }
      
      export default class Game {
        size: number
        stones: Stone[][]
        turn = 1
        player: PLAYER = PLAYER.BLACK
        ended = false
        board: HTMLDivElement
        message: HTMLParagraphElement
        reset: HTMLButtonElement
        leave: HTMLButtonElement
      
        constructor(size: number) {
          this.size = size
          this.board = document.createElement('div')
          this.board.classList.add('board')
          this.board.style.gridTemplateColumns = `repeat(${this.size}, 3.5rem)`
          this.message = document.createElement('p')
          this.reset = document.createElement('button')
          this.reset.innerText = 'Reset'
          this.reset.addEventListener('click', () => this.initialise())
          this.leave = document.createElement('button')
          this.leave.innerText = 'Leave'
          this.leave.addEventListener('click', () => this.initialise())//change from this.initialise to another function to go to homepage if not finished or save game in local storage
          document
            .getElementById('game')
            ?.append(this.board, this.message, this.reset, this.leave)
        }
      
        initialise() {
          this.stones = Array.from({ length: this.size }).map((_, i) =>
            Array.from({ length: this.size }).map((_, j) => {
              const stone = new Stone()
              stone.element.addEventListener(
                'click',
                this.setPlacement(stone, [i, j])
              )
              return stone
            })
          )
          this.board.innerHTML = ''
          this.message.innerText = 'Current player: Black'
          this.ended = false
          this.board.append(...this.stones.flat().map((stone) => stone.element))
        }
      
        setPlacement(stone: Stone, position: [number, number]) {
          return () => {
            if (this.ended) return
            const placed =
              this.player === PLAYER.BLACK
                ? stone.placedByBlack()
                : stone.placedByWhite()
            if (placed) {
              this.check(position)
              if (!this.ended) {
                this.changePlayer()
              }
            }
          }
        }
      
        changePlayer() {
          this.player = 1 - this.player
          this.message.innerText = `Current player: ${this.currentPlayer}`
          if (this.player === PLAYER.BLACK) {
            this.turn++
          }
        }
      
        check(position: [number, number]) {
          if (this.turn < 5) return
          if (
            this.getNumberInARowHorizontally(position) === 5 ||
            this.getNumberInARowVertically(position) === 5 ||
            this.getNumberInARowTopLeftDiagonally(position) === 5 ||
            this.getNumberInARowTopRightDiagonally(position) === 5
          ) {
            this.message.innerText = `Game over, ${this.currentPlayer} won`
            this.ended = true
          } else if (this.isDraw) {
            this.message.innerText = `Game is a draw`
            this.ended = true
          }
        }
      
        get currentPlayer() {
          return this.player === PLAYER.BLACK ? 'Black' : 'White'
        }
      
        get isDraw() {
          return this.stones.flat().filter((stone) => stone.isEmpty).length === 0
        }
      
        isCurrentPlayerStone(position: [number, number]) {
          const [x, y] = position
          if (x < 0 || x >= this.size || y < 0 || y >= this.size) return false
          return (
            (this.player === PLAYER.BLACK && this.stones[x][y].isBlack) ||
            (this.player === PLAYER.WHITE && this.stones[x][y].isWhite)
          )
        }
      
        getNumberInARowHorizontally(position: [number, number]) {
          const [x, y] = position
          let numberInARow = 1
          let left = y
          // check left direction
          while (numberInARow < 5 && this.isCurrentPlayerStone([x, --left])) {
            numberInARow++
          }
          if (numberInARow === 5) return numberInARow
          let right = y
          // check right direction
          while (numberInARow < 5 && this.isCurrentPlayerStone([x, ++right])) {
            numberInARow++
          }
          return numberInARow
        }
      
        getNumberInARowVertically(position: [number, number]) {
          const [x, y] = position
          let numberInARow = 1
          let top = x
          // check top direction
          while (numberInARow < 5 && this.isCurrentPlayerStone([--top, y])) {
            numberInARow++
          }
          if (numberInARow === 5) return numberInARow
          let bottom = x
          // check bottom direction
          while (numberInARow < 5 && this.isCurrentPlayerStone([++bottom, y])) {
            numberInARow++
          }
          return numberInARow
        }
      
        getNumberInARowTopLeftDiagonally(position: [number, number]) {
          const [x, y] = position
          let numberInARow = 1
          let [top, left] = [x, y]
          // check top left direction
          while (numberInARow < 5 && this.isCurrentPlayerStone([--top, --left])) {
            numberInARow++
          }
          if (numberInARow === 5) return numberInARow
          let [bottom, right] = [x, y]
          // check bottom right direction
          while (numberInARow < 5 && this.isCurrentPlayerStone([++bottom, ++right])) {
            numberInARow++
          }
          return numberInARow
        }
      
        getNumberInARowTopRightDiagonally(position: [number, number]) {
          const [x, y] = position
          let numberInARow = 1
          let [top, right] = [x, y]
          // check top right direction
          while (numberInARow < 5 && this.isCurrentPlayerStone([--top, ++right])) {
            numberInARow++
          }
          if (numberInARow === 5) return numberInARow
          let [bottom, left] = [x, y]
          // check bottom left direction
          while (numberInARow < 5 && this.isCurrentPlayerStone([++bottom, --left])) {
            numberInARow++
          }
          return numberInARow
        }
      }
    
      enum STATUS {
        EMPTY = 'EMPTY',
        BLACK = 'BLACK',
        WHITE = 'WHITE',
      }
      
      export default class Stone {
        status: STATUS = STATUS.EMPTY
        element: HTMLDivElement
      
        constructor() {
          this.element = document.createElement('div')
          this.element.classList.add('stone')
        }
      
        get isBlack() {
          return this.status === STATUS.BLACK
        }
      
        get isWhite() {
          return this.status === STATUS.WHITE
        }
      
        get isEmpty() {
          return this.status === STATUS.EMPTY
        }
      
        placedByBlack() {
          if (this.status !== STATUS.EMPTY) return false
          this.status = STATUS.BLACK
          this.element.classList.add(this.status.toLowerCase())
          return true
        }
      
        placedByWhite() {
          if (this.status !== STATUS.EMPTY) return false
          this.status = STATUS.WHITE
          this.element.classList.add(this.status.toLowerCase())
          return true
        }
      }
      
    
    const game = new Game(5) //THIS WHERE TO CHANGE SIZE //test
    game.initialise()
}