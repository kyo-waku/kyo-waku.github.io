import React from 'react'
import Layout from '../components/layout'
import siribal from '../images/siribal.png'

const PrivacyPage = () => (
    <Layout>
        <h1>SeriousBalloon</h1>
        <span className="image small">
            <img src={siribal} alt="" />
        </span>
        <h2 className="major">プライバシーポリシー</h2>
        <p>
            きょうわくのプライバシーポリシーは「誠実であること」です。
            アプリを使ってくださる方々に、ワクワクをたくさん提供することを第一に考えます。
        </p>
        <h2 className="major">個人情報の取扱について</h2>
        <p>
            きょうわくの提供するアプリでは次のような目的で、情報を記録・使用しています。
        </p>
        <ul>
            <li>アプリ内で入力された情報はアプリをもっと役立つものにするために使います</li>
            <li>アプリの動作に関するデータはアプリをもっと良くするための分析のために使います</li>
            <li>アプリの動作に関するデータは問題の早期解決のために使います</li>
        </ul>
        <h3 className="major">アプリが入手する情報</h3>
        <ul>
            <li>ゲームのスコア</li>
            <li>入力した名前などの情報</li>
            <li>端末の情報：iPhone、iPad など</li>
        </ul>
        <h3 className="major">アプリが入手しない情報</h3>
        <ul>
            <li>氏名</li>
            <li>年齢</li>
            <li>電話番号</li>
            <li>住所</li>
            <li>クレジットカード情報</li>
            <li>その他、個人を特定するような情報</li>
        </ul>
        <h2 className="major">何かあれば</h2>
        <p>
            メールまたはTwitterよりご連絡ください。
        </p>
        <ul className="icons">
            <li>
                <a href="mailto:kyowaku.dev@gmail.com" className="icon fa-paper-plane">
                <span className="label">Mail</span>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/KYOwakuDev" className="icon fa-twitter">
                <span className="label">Twitter</span>
                </a>
            </li>
        </ul>
    </Layout>
)

export default PrivacyPage
