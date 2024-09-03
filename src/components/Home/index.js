// Write your JS code here
import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home-container">
          <div className="text">
            <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="home-page-img"
            />
            <p className="home-description">
              Fashion is part of the daily air and it doesn't quite help that it
              changes all the time. Clothes have always been a marker of the era
              and we are in a revolution. Your fashion makes you been seen and
              heard that way you are. So, celebrate the seasons new and exciting
              fashion in your own way.
            </p>
            <button className="home-page-button">Shop Now</button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="home-page-img-1"
          />
        </div>
      </div>
    )
  }
}

export default Home
