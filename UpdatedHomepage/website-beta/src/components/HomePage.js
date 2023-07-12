// import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import couple from './../assests/couple.jpg'
import { loremIpsum } from "lorem-ipsum";

function HomePage() {
    return (
        <div class="main-page">
            <div class="homepageGrid">
                She my honeyiest favorite!!!
                <img src={couple} alt="Cute Couple" />
            </div>
            <div class="all-about-me">
                <p>
                    {loremIpsum({ count: 7 })}
                </p>
                {/* <div>{loremIpsum({ count: 7 })}</div> */}
            </div>
        </div>
    )
}

export default HomePage
