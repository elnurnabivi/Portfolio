import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import E from '../../assets/images/e4.png'

// import Logo from './Logo'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['l', 'n', 'u', 'r']
  const jobArray = [
    'w',
    'e',
    'b',
    '',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    ',',
  ]
  const locationArray = [
    'b',
    'a',
    's',
    'e',
    'd',
    '',
    'i',
    'n',
    '',
    'P',
    'o',
    'l',
    'a',
    'n',
    'd',
  ]

  //   useEffect(() => {
  //     return setTimeout(() => {
  //       setLetterClass('text-animate-hover')
  //     }, 4000)
  //   }, [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <div className="container home-page">
        <Logo />
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={letterClass}>e</span>
            <span className={letterClass}>l</span>
            <span className={letterClass}>l</span>
            <span className={letterClass}>o</span>
            <span className={letterClass}>,</span>
            <span className={letterClass}> </span>
            <span className={letterClass}></span>
            <span className={letterClass}>I</span>
            <span className={letterClass}>'m</span>

            {/* <span className={`${letterClass}_12`}>i,</span> */}
            {/* 
            <span className={`${letterClass}_13`}>I</span>
            <span className={`${letterClass}_14`}>'m</span> */}
            {/* <img src={LogoTitle} alt="front-end developer" /> */}
            <img src={E} alt="front-end developer" />

            {/* <span className='e-letter'>E</span> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
              className=""
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
              className="job-h1"
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={locationArray}
              idx={22}
              className="location-h1"
            />
          </h1>
          <h2>Front-End Developer | ReactJS Specialist </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
