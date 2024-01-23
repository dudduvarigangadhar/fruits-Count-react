import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  increaseMangoCount = () => {
    this.setState(prevState => {
      console.log('clicked mango count')
      return {mangoCount: prevState.mangoCount + 1}
    })
  }

  increaseBananaCount = () => {
    this.setState(prevState => {
      console.log('clicked banana count')
      return {bananaCount: prevState.bananaCount + 1}
    })
  }

  render() {
    const {mangoCount, bananaCount} = this.state

    return (
      <div className="fruits-bg-container">
        <div className="fruits-container">
          <h1 className="fruits-display">
            Bob ate <span className="fruits-count">{mangoCount}</span> mangoes
            <span className="fruits-count">{bananaCount}</span> bananas
          </h1>
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              className="image"
              alt="mango"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              className="image"
              alt="banana"
            />
          </div>
          <div className="button-container">
            <button className="eat-button" onClick={this.increaseMangoCount}>
              Eat Mango
            </button>
            <button className="eat-button" onClick={this.increaseBananaCount}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
