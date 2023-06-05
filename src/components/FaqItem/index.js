import './index.css'

const FaqItem = props => {
  const {itemDetails, isShow} = props
  const {questionText, answerText} = itemDetails

  const imgUrl = isShow
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const imgText = isShow ? 'minus' : 'plus'
  const ansText = isShow ? (
    ''
  ) : (
    <div>
      <br className="separator" />
      <p className="text">{answerText}</p>
    </div>
  )

  //   const onToggle = () => {
  //     isShow = !isShow
  //   }

  return (
    <li className="faqItem">
      <div className="item">
        <h1 className="q">{questionText}</h1>
        <button className="btn" type="button" onClick={isShow}>
          <img src={imgUrl} alt={imgText} className="img" />
        </button>
      </div>
      {ansText}
    </li>
  )
}

export default FaqItem
