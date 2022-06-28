import React from 'react';

import Head from './head';
import Nav from './nav';
import Footer from './footer';
import Scripts from './scripts';
import './css/about.css'
import './css/title.css'
import './css/default.css'


function Contact (){
    return (
		<div>
			<Head/>
			<body>
				<Nav/>
                <section class="title">
                    <br/>
                    <div>
                        <h1>Contact Us</h1>
                    </div>
                </section>
				<p>This webapp was created by students, so there may be a couple mistakes or outdated information.
                    If you see a mistake or have any suggestions, please fill out <a href="https://forms.gle/Zn4CudZKmbwryHnJ8" style={{color : "#da0101"}}>this</a> form!
                    We will do our best to update the site :)
                </p>
                
				<Footer/>
				<Scripts/>
			</body>
		</div>
    )
}

export default Contact;




