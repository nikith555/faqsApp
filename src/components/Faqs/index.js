import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

const initialFaqsList = [
  {
    id: 0,
    questionText: 'What is IRC?',
    answerText:
      'IRC is an Industry Ready Certification that represents your readiness for a job with the necessary skills.',
  },
  {
    id: 1,
    questionText: 'What is the medium of instruction?',
    answerText:
      'The courses would be delivered in English and Telugu. The program will be available in more vernacular languages soon.',
  },
  {
    id: 2,
    questionText:
      'Is there an EMI option to pay the fee for CCBP Tech 4.0 Intensive?',
    answerText:
      'Yes, EMI support is available for credit cards. Please select EMI option while making payment for more information.',
  },
  {
    id: 3,
    questionText: 'How will my doubts be cleared? What is the mechanism?',
    answerText:
      'You can ask your doubts in the discussions section and course mentor will answer them. You can also see the doubts asked by other students.',
  },
]

class Faqs extends Component {
  state = {
    isShow: false,
    faqList: initialFaqsList,
  }

  onToggle = () => {
    this.setState(p => ({isShow: !p.isShow}))
  }

  render() {
    const {faqList} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">FAQs</h1>
        <ul className="items">
          {faqList.map(eachItem => (
            <FaqItem key={eachItem.id} itemDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
