// import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import React, { useState, useEffect } from 'react';
import Logo from './Logo'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'I','o', 'a', 'n', 'a', ' ','L', 'i', 'v', 'i', 'a']
    // const jobArray = ['A', 'r', 't', 'i','f', 'i','c','i','a','l',' ','I', 'n', 't','e','l','l','i','g','e','n','c','e',' ','M','a','s','t','e','r',' ','s',' ','S','t','u','d','e','n','t']

    const animateSth = () => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000)
    }

    useEffect(() => {
        animateSth()
    }, [])

    return (
    <div className="container home-page">
        <div className="text-zone">
            <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            {/* {<img src={LogoTitle} alt="developer"></img>} Rotating Letter, decided not to use it */}
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
            </h1>
            <br />
            {/* <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={26}/> */}
            <h2>Artificial Intelligence Master's Student | Software Engineering Enthusiast</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
    </div>
    );
}

export default Home