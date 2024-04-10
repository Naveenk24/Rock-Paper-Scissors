import './index.css'

export default function GameChoiceItems(props) {
  const {choiceDetails, getTheChoice} = props
  const {id, imageUrl} = choiceDetails

  const onClickTheChoiceButton = () => {
    getTheChoice({id, imageUrl})
  }

  const dataTestId = `${id.toLowerCase()}Button`
  console.log(dataTestId)
  return (
    <li>
      <button
        type="button"
        className="choice-button"
        onClick={onClickTheChoiceButton}
        data-testid={dataTestId}
      >
        <img src={imageUrl} alt={id} className="choice-image" />
      </button>
    </li>
  )
}
