// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="nxt-trendz-logo-mobile"
          />
          <ul className="links-container">
            <Link to="/" className="link">
              <li className="link-item">Home</li>
            </Link>
            <Link to="/products" className="link">
              <li className="link-item">Products</li>
            </Link>
            <Link to="/cart" className="link">
              <li className="link-item">Cart</li>
            </Link>
            <button className="logout-btn">Logout</button>
          </ul>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="logout-img"
          />
        </div>
        <ul className="links-container-1">
          <Link to="/" className="link">
            <li className="link-item-1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="link-img-1"
              />
            </li>
          </Link>
          <Link to="/products" className="link">
            <li className="link-item-1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
                className="link-img-1"
              />
            </li>
          </Link>
          <Link to="/cart" className="link">
            <li className="link-item-1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className="link-img-1"
              />
            </li>
          </Link>
        </ul>
      </nav>
    )
  }
}

export default Header
