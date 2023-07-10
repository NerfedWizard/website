import React from 'react';
import aws from './../assests/aws.svg';
import mysql from './../assests/mysql.svg';
import python from './../assests/python.svg';
import react from './../assests/react.svg';
import css from './../assests/css.svg';
import java from './../assests/java.svg';
// import '../images/js.svg';
// import html from './../assests/html.svg';
import js from './../assests/js.svg';
import './../App.css';
import { useNavigate } from 'react-router-dom';


function Resume() {
    const navigate = useNavigate();
    const handleHome = () => {
        navigate("/");
    }
    // const [htmlSvg] = useState("html.svg");
    // const [svg, setSvg] = useState([{


    // }])
    return (
        <div class="main-grid">
            <main>
                <button class="custom-button" onClick={handleHome}>Home</button>
                <p class="eyebrow">Skills & Experience</p>
                <h1 class="page-title">My Website Beta</h1>
                <p class="intro">
                    <span class="emoji">
                        🎶
                    </span>
                    It's me, hi, I'm the problem, it's me!
                    As an individual with
                    exquisite taste in the finest companies, I’ve
                    helped represent both client and employer to the highest degree.
                </p>

                <div class="job-experience" role="list">
                    <div class="job">
                        <p class="year">2021 - Present</p>
                        <div class="job-info">
                            <h2 class="role">Software Engineer</h2>
                            <span class="company">HCL Tech</span>
                        </div>
                        <p>
                            This job involves working with clients to find solutions that best fit their needs
                        </p>

                    </div>
                    <div class="job">
                        <p class="year">
                            1998 - Present
                        </p>
                        <div class="job-info">
                            <h2 class="role">
                                Painting/Drywall
                            </h2>
                            <span class="company">
                                Self-Employed
                            </span>
                            <p>
                                Think of a short description.  What if I make the description longer
                            </p>
                        </div>
                    </div>
                    <div class="job">
                        <p class="year">2009 - 2016</p>
                        <div class="job-info">
                            <h2 class="role">Pasteurizer - Vacation Relief</h2>
                            <span class="company">Hastings Co-op Creamery</span>
                            <p>Think of a short description</p>
                        </div>
                    </div>
                    <div class="job">
                        <p class="year">2001 - 2003</p>
                        <div class="job-info">
                            <h2 class="role">M1 Abrams System Maintainer</h2>
                            <span class="company">United States Armed Forces (Army)</span>
                            <p>Think of a short description</p>
                        </div>
                    </div>
                </div>
            </main>

            <aside>
                <h2 class="visually-hidden">My Skills</h2>
                <ul class="icon-list" role=" ">
                    {/* <li>
                        <p class="visually-hidden">html</p>
                        <img src={html} alt="html" />
                    </li> */}
                    <li>
                        <p class="visually-hidden">css</p>
                        <img src={css} alt="css" />
                    </li>
                    <li>
                        <p class="visually-hidden">java</p>
                        <img src={java} alt="java" />
                    </li>
                    <li>
                        <p class="visually-hidden">js</p>
                        <img src={js} alt="javascript" />
                    </li>
                    <li>
                        <p class="visually-hidden">react</p>
                        <img src={react} alt="react" />
                    </li>
                    <li>
                        <p class="visually-hidden">python</p>
                        <img src={python} alt="python" />
                    </li>
                    <li>
                        <p class="visually-hidden">MySql</p>
                        <img src={mysql} alt="MySQL" />
                    </li>
                    <li>
                        <p class="visually-hidden">AWS</p>
                        <img src={aws} alt="AWS" />
                    </li>
                </ul>
            </aside>
        </div>
    )
}

export default Resume
