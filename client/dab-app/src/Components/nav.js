import React from 'react';

import './css/default.css';
import './css/nav.css';


function Nav (){
    return (
		<nav class="navbar navbar-expand-sm navbar-light">
            <div class="container">
                <a class="navbar-brand" href="/">
                    <i class="uil uil-building"></i>D@B
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    <span class="navbar-toggler-icon"></span>
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <a href="/about" class="nav-link"><span data-hover="About">About</span></a>
                        </li>
                        <li class="nav-item">
                            <a href="/dorms" class="nav-link"><span data-hover="Dorms">Dorms</span></a>
                        </li>
                        <li class="nav-item">
                            <a href="/recommend" class="nav-link"><span data-hover="Recommendations">Recommendations</span></a>
                        </li>
                        <li class="nav-item">
                            <a href="/contact" class="nav-link"><span data-hover="Contact">Contact</span></a>
                        </li>
                        <li class="nav-item">
                            <a href="/profile" class="nav-link"><span data-hover="Profile">Profile</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;




