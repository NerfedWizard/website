import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function HomePage() {
    const navigate = useNavigate();
    const [number, setNumber] = useState(0);
    const [boring, setBoring] = useState("");
    const handleClick = () => {
        if (number === 20) {
            setBoring("This is boring huh!");
        } else if (number > 27) {
            setBoring("");
        }
        setNumber(number + 1);
    }
    const handleResume = () => {
        navigate("/resume");
    }
    return (
        <div class="main-page">
            <button class="buttonSubmit" onClick={handleClick}>ClickMe</button><h3>{boring}</h3><p>{number}</p>
            <div>A little about me....</div>
            <button class="buttonSubmit" onClick={handleResume}>Resume</button>
        </div>
    )
}

export default HomePage
