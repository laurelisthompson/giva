import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ currentUser, logout }) => {

    const profileLink = () => (
        <div class="main-page">
            <nav class="site-nav">
                <div>
                    <div class="lend-dropdown">
                        <Link to={"/dashboard"}>
                            <button class="lend-dropbtn" type="button">
                                Giva
                            </button>
                        </Link>
                    </div>
                    <div class="lend-dropdown">
                        <button class="lend-dropbtn">Lend</button>
                        <div class="dropdown-content">
                            <h1>Categories</h1>
                            <Link to={'/loans/women'}>Women</Link>
                            <Link to={'/loans/agriculture'}>Agriculture</Link>
                            <Link to={'/loans/education'}>Education</Link>
                            <Link to={'/loans/refugee'}>Refugee</Link>
                            <Link to={'/loans/eco'}>Eco-friendly</Link>
                            <Link to={'/loans/domestic'}>Kiva U.S.</Link>
                            <Link to={'/loans/livestock'}>Livestock</Link>
                            <Link to={'/loans/arts'}>Arts</Link>
                            <Link to={'/loans'}>View All</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="about-dropdown">
                        <button class="about-dropbtn">About</button>
                    </div>
                    <div class="profile-dropdown">
                        <button onClick={logout}>Log Out</button>
                    </div>
                </div>
            </nav>
            <nav class="profile-nav">
                <div class="profile-upper-tabs">
                    <button>Profile</button>
                    <button>My teams</button>
                    <button>Messages</button>
                    <button>Settings</button>
                </div>
            </nav>
            <div>
                <h1>Portfolio</h1>
            </div>
        </div>
    );


    return profileLink();
};

export default Profile;