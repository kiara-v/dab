import React from 'react';

import Head from './head';
import Nav from './nav';
import AboutTitle from './about-title';
import Footer from './footer';
import Scripts from './scripts';
import './css/about.css'

import Us from './img/us.png';


function About (){
    return (
		<div className="about">
			<Head/>
			<body>
				<Nav/>
				<AboutTitle/>
				<p>Every year before the housing lottery, students scour the internet for any information about the
					dorms they’re interested in. However, there only seems to be bits and pieces online,
					resulting in students making blind decisions of where to live for an entire year.
					Troubled by the lack of collective information, our CSCI0320 group decided to create a web app
					that combines all the necessities in one place! Once signed in, feel free to explore any
					dorm through photos, features, descriptions, floor plans, and personal reviews!
					If you’re unsure about which dorm fits best for you, take our Recommendation Survey!</p>
				<p>Special thanks to Jenny for being our wonderful mentor, Tim for giving us the knowledge and
					opportunity to create this web app, and all our peers for contributing images, descriptions,
					and debugging help (neil-the-react-guy, kazen, & richard) ♡</p>
				<p>Happy Dorm-ing!</p>
				<img className="drawings" src={Us} alt="Logo"/>
				<p className='white'>ahfi chross</p>
				<Footer/>
				<Scripts/>
			</body>
		</div>
    )
}

export default About;




