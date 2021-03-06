import PropTypes from 'prop-types'
import React from 'react'
import icon from '../images/icon.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon">
        <img src={icon} alt="" height="100%" width="100%"/>
      </span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>LiteTech</h1>
        <p>
          Welcome to the LiteTech Minecraft Server
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            className="transparent-button"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            className="transparent-button"
            onClick={() => {
              props.onOpenArticle('image')
            }}
          >
            Images
          </button>
        </li>
        <li>
          <button
            className="transparent-button"
            onClick={() => {
              props.onOpenArticle('members')
            }}
          >
            Members
          </button>
        </li>
        <li>
          <button
            className="transparent-button"
            onClick={() => {
              props.onOpenArticle('youtube')
            }}
          >
            Youtube
          </button>
        </li>
        <li>
          <button
            className="transparent-button"
            onClick={() => {
              props.onOpenArticle('discord')
            }}
          >
            Discord
          </button>
        </li>
        <li>
          <button
            className="transparent-button"
            onClick={() => {
              props.onOpenArticle('login')
            }}
          >
            Login
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
