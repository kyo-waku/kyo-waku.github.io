import PropTypes from 'prop-types'
import React from 'react'
import siribal from '../images/siribal.png'
import kyowaku from '../images/kyowakulogo.png'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <h3> 1. Serious Balloon</h3>
          <span className="image main">
            <img src={siribal} alt="" />
          </span>
          <p>
            Serious Balloon は拡張現実世界に現れるバルーンを撃ち落とす、爽快シューティングゲームです。
          </p>
          <p>Technologies : Unity3D, ARKit2, Firebase </p>
          <h3>2. Comming Soon...</h3>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={kyowaku} alt="" />
          </span>
          <p>
            KYO-waku (きょうわく) は京都を拠点に活動するエンジニアチームです
          </p>
          <p>
            世の中には日々 ワクワクする技術が誕生しています。
            しかし 私たち現代人はたくさんの情報に囲まれながらも
            ワクワクすることを忘れてしまっているのではないでしょうか。
            そんな世の中に ちょっとしたワクワクをお届けしたいという思いで
            私たちは活動しています。
          </p>

          <h2 className="major">Member</h2>
          <h3>やまもと</h3>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Introduction.
          </p>
          <ul className="icons">
            <li>
              <a href="https://twitter.com/yamashu0" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
          </ul>

          <h3>ごしま</h3>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Introduction.
          </p>


          <h3>すぎもと</h3>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Introduction.
          </p>
          <ul className="icons">
            <li>
              <a href="https://twitter.com/sgmtsnj" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://note.com/sgmtsnj" className="icon fa-book">
                <span className="label">note</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/sgmtsnj" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p> kyowaku.dev (@gmail.com) </p>
          <a rel="ar" href="../images/kyowaku.usdz">
            <img src="../images/kyowakulogo.png" />
          </a>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/KYOwakuDev"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://note.com/kyowaku" className="icon fa-book">
                <span className="label">note</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/kyo-waku"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
