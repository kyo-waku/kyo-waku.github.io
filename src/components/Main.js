import PropTypes from 'prop-types'
import React from 'react'
import siribal from '../images/siribal.png'
import kyowaku from '../images/kyowakulogo.png'
import pic03 from '../images/pic03.jpg'
import shinji from '../images/shinji.jpg'
import shuhei from '../images/shuhei.jpg'

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
          <span className="image main">
            <img src={siribal} alt="" />
          </span>
          <h3>SERIOUS BALLOON</h3>
          <p>
            拡張現実世界に浮かぶバルーンを撃ち落とす、爽快なシューティングゲームです。
            AR技術を応用した世界で初めて（かもしれない）シューティングゲームです。
            敵の攻撃を避けるには、あなた自身が動くしかありません。
            椅子にじっとしていてはハイスコアは狙えませんよ。
          </p>
          <h3>KEY TECHNOLOGIES</h3>
          <p>Unity3D, ARKit2, Firebase</p>
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
          <br/><br/><br/>
          <h2 className="major">Member</h2>
          <h3>しゅうへい</h3>
          <span className="image left">
            <img src={shuhei} alt="" />
          </span>
          <p>
            きょうわくの船頭<br />
            たぶんいちばんワクワクしている人
          </p>
          <ul className="icons">
            <li>
              <a href="https://twitter.com/yamashu0" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
          </ul>
          <br/><br/><br/>
          <h3>すすむ</h3>
          <span className="image left">
            <img src={pic03} alt="" />
            <img src={pic03} alt="" />
          </span>
          <p>
            きょうわくのブレーン<br />
            荒くれ者達を冷静に導くマザー
          </p>
          <ul className="icons">
            <li>
              <a href="/404" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
          </ul>
          <br/><br/><br/>
          <h3>しんじ</h3>
          <span className="image left">
            <img src={shinji} alt="" />
          </span>
          <p>
            きょうわくの環境整えマン<br />
            ワクワクしているのかニヤニヤしているのかわからない
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
          <span className="image main">
            <img src={kyowaku} />
          </span>
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
