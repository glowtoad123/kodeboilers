import { Link } from 'react-router-dom'
import React from 'react'

export default function Info() {
    return (
        <div>
            <div className="titleContainer">
                <img className="titlePic" src="/favicon.svg" alt="kodensnip icon" />
                <h1 className="titleText">Kodensnip</h1>
            </div>
            <div className="featureContainerContainer">
                <div className="featureContainer">
                    <img className="featurePic" src="/creation.jpeg" alt="kodensnip creation page" />
                    <p className="description">create snippet for your coding projects so that use will no longer have to use templates. Just copy and paste your code whenever they need it.</p>
                </div>
                <Link to="/enter"><button className="enter">Enter</button></Link>
            </div>


            <br />
            <br />

            <div className="footerContainer">
                <h1 className="footerText">Made using ReactJS + Firebase + Vercel</h1>
            </div>
        </div>
    )
}
