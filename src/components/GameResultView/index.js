import './index.css'

export default function GameResultView(props) {
  const {gameResultView, getTheGameResult, showMessage} = props
  const {playerUrl, opponentUrl} = gameResultView
  const onClickTheResetButton = () => {
    getTheGameResult()
  }
  return (
    <div className="game-result-container">
      <div className="result-container">
        <div className="player-container">
          <p className="player-name">YOU</p>
          <img
            src={playerUrl.imageUrl}
            alt="your choice"
            className="choice-image"
          />
        </div>
        <div className="opponent-container">
          <p className="opponent-name">OPPONENT</p>
          <img
            src={opponentUrl.imageUrl}
            alt="opponent choice"
            className="choice-image"
          />
        </div>
      </div>
      <div className="reset-container">
        <p className="win-element">{showMessage}</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickTheResetButton}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}
