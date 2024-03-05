import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['H', 'i', ',', '', 'I', "'m", '', 'E', 'l', 'n', 'u', 'r']
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
            <span className="name-h1">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={10}
              />
            </span>
            <br />
            <span className="job-h1">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
              />
            </span>

            {/* <br /> */}
            <span className="location-h1">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={locationArray}
                idx={24}
              />
            </span>
          </h1>
          <h2>Front-End Developer</h2>

          <div className="links-mainpage">
            <Link to="/contact" className="flat-button">
              Contact me
            </Link>
            <Link to="/projects" className="flat-button">
              Projects
            </Link>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
