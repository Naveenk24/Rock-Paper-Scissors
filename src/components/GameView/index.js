import {useState} from 'react'

import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'

import GameResultVies from '../GameResultView/index'

import GameChoiceItems from '../GameChoiceItems/index'

import './index.css'

export default function GameView(props) {
  const {choicesList} = props

  const [score, setScore] = useState(0)

  const [gameResult, setGameResult] = useState(false)

  const [showMessage, setShowMessage] = useState('')

  const [gameResultView, setGameResultView] = useState({})

  const getTheChoice = data => {
    const {id} = data
    const getOpponentChoiceIndex = Math.floor(Math.random() * 3)
    const getOpponentChoice = choicesList[getOpponentChoiceIndex]

    const gameDetails = {
      playerUrl: data,
      opponentUrl: getOpponentChoice,
    }

    setGameResultView(gameDetails)

    if (id === 'PAPER' && getOpponentChoice.id === 'ROCK') {
      setScore(prevState => prevState + 1)
      setShowMessage('YOU WON')
    } else if (id === 'SCISSORS' && getOpponentChoice.id === 'ROCK') {
      setScore(prevState => prevState - 1)
      setShowMessage('YOU LOSE')
    } else if (id === 'ROCK' && getOpponentChoice.id === 'PAPER') {
      setScore(prevState => prevState - 1)
      setShowMessage('YOU LOSE')
    } else if (id === 'SCISSORS' && getOpponentChoice.id === 'PAPER') {
      setScore(prevState => prevState + 1)
      setShowMessage('YOU WON')
    } else if (id === 'ROCK' && getOpponentChoice.id === 'SCISSORS') {
      setScore(prevState => prevState + 1)
      setShowMessage('YOU WON')
    } else if (id === 'PAPER' && getOpponentChoice.id === 'SCISSORS') {
      setScore(prevState => prevState - 1)
      setShowMessage('YOU LOSE')
    } else if (id === getOpponentChoice.id) {
      setShowMessage('IT IS DRAW')
    }

    setGameResult(prevState => !prevState)
  }

  const getTheGameResult = () => {
    setGameResult(prevState => !prevState)
  }

  return (
    <div className="background-container">
      <div className="game-header-container">
        <div className="game-name-heading-container">
          <h1 className="choice-name">ROCK PAPER SCISSORS</h1>
        </div>
        <div className="game-score-container">
          <p className="score-name-para">Score</p>
          <p className="score-para">{score}</p>
        </div>
      </div>
      <div className="game-choices-container">
        {gameResult ? (
          <GameResultVies
            getTheGameResult={getTheGameResult}
            showMessage={showMessage}
            gameResultView={gameResultView}
          />
        ) : (
          <ul className="choices-list">
            {choicesList.map(eachItem => (
              <GameChoiceItems
                key={eachItem.id}
                choiceDetails={eachItem}
                getTheChoice={getTheChoice}
              />
            ))}
          </ul>
        )}
      </div>
      <div className="modal-container">
        <Popup
          modal
          trigger={
            <button type="button" className="rules-button">
              Rules
            </button>
          }
        >
          {close => (
            <>
              <div className="modal">
                <button
                  className="close-button"
                  type="button"
                  aria-label="Close"
                  onClick={() => close()}
                >
                  <RiCloseLine />
                </button>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                  className="modal-image"
                />
              </div>
            </>
          )}
        </Popup>
      </div>
    </div>
  )
}
