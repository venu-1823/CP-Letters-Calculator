// Write your code here.
import {Component} from 'react'
import './index.css'

class LetterCalculator extends Component {
  state = {word: '', noOfLetters: 0}
  onChangeOfLetters = event => {
    const inputText = event.target.value
    this.setState({word: inputText, noOfLetters: inputText.length})
  }
  render() {
    const {word, noOfLetters} = this.state
    return (
      <div className="app-container">
        <div className="calculator">
          <div className="calculation-part">
            <h1 className="calculation-part-heading">
              Calculate the
              <br /> Letters you
              <br /> enter
            </h1>
            <p className="calculation-part-paragraph">Enter the phase</p>
            <input
              type="text"
              placeholder="Enter the phase"
              onChange={this.onChangeOfLetters}
              value={word}
            />
            <div className="noOfLetters-container">
              <p className="noOfLetters-paragraph">
                No.of letters: {noOfLetters}
              </p>
            </div>
          </div>
          <img src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png" />
        </div>
      </div>
    )
  }
}
export default LetterCalculator
