import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import couple from './../assests/couple.jpg'
import { loremIpsum } from "lorem-ipsum";

function HomePage() {
    const navigate = useNavigate();
    const handleResume = () => {
        navigate("/resume");
    }
    const handleQuote = () => {
        navigate("/quotes")
    }
    return (
        <div class="main-page">
            <button class="custom-button" onClick={handleResume}>Resume</button>
            <button class="custom-button" onClick={handleQuote}>Quotes Program</button>
            <div class="homepageGrid">
                She my honeyiest favorite!!!
                <img src={couple} alt="Cute Couple" />
            </div>
            <div class="all-about-me">
                <p>
                    I like to talk a lot and I have an abundance of energy sometimes and other times like today I do not have energy at all and do not want to do shit
                </p>
                {/* <div>{loremIpsum({ count: 7 })}</div> */}
            </div>
        </div>
    )
}

export default HomePage
