import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <div class="main-page">
            <nav class="site-nav">
                <div>
                    <button class="giva-button">Giva</button>
                    <button class="lend-button">Lend</button>
                </div>
                <div>
                    <button>Borrow</button>
                    <button>About</button>
                    <Link class="signin" to="/signin">Sign in</Link>
                </div>
            </nav>
            <section>
                <iframe class="video-link" width="560" height="315" src="https://www.youtube.com/embed/WCraaM6PAos?autoplay=1?mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
            <div class="impact-steps">
                <section>
                    <h1>Three Steps to Impact</h1>
                    <p>Set your commitment once, Kiva will make sure</p>
                    <p>every dollar is lent to COVID-19 impacted</p>
                    <p>individuals and businesses.</p>
                </section>
                <section>
                    <div>
                        <img src={choose} alt="choose-icon" class="icon" />
                        <h1>Choose</h1>
                        <p>Choose a monthly amount to go</p>
                        <p>toward COVID-19 relief that works</p>
                        <p>for you.</p>
                    </div>
                    <div>
                        <img src={check} alt="check-icon" class="icon" />
                        <h1>Check</h1>
                        <p>Receive a monthly impact report</p>
                        <p>explaining how your money helped.</p>
                    </div>
                    <div>
                        <img src={grow} alt="grow-icon" class="icon"/>
                        <h1>Grow</h1>
                        <p>As you get repaid, Kiva will re-lend</p>
                        <p>your money and multiply</p>
                        <p>your impact.</p>
                    </div>
                </section>
                <img src={dottedBackground} alt="dots" class="dots"/>
            </div>
            <div class="why-kiva">

            </div>
        </div>
    );

    const profileLink = () => (
        <nav>
            <Link to={`/users/${currentUser.id}`}>Profile</Link>
            <button onClick={logout}>Log Out</button>
        </nav>
    );

    return currentUser ? profileLink() : sessionLinks();
};

export default Greeting;