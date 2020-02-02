import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo"></div>
    <div className="content">
      <div className="inner">
        <h2>ワクワクしていますか？</h2>
        <p>
          私たち KYO-waku は すべての人が毎日ワクワクできるような世の中を目指す エンジニアチームです
          <br />
          <span style={{color:"limegreen"}}>京都</span>から たくさんの人の たった一度しかない <span style={{color:"limegreen"}}>今日</span> に
          ちょっとしたワクワクをお届けしていきます
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
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
