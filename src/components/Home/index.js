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
    'B',
    'u',
    'i',
    'l',
    'd',
    'i',
    'n',
    'g',
    ' ',
    '&',
    ' ',
    's',
    'c',
    'a',
    'l',
    'i',
    'n',
    'g',
    ' ',
    'd',
    'i',
    'g',
    'i',
    't',
    'a',
    'l',
    ' ',
    's',
    'o',
    'l',
    'u',
    't',
    'i',
    'o',
    'n',
    's',
  ]
  // const locationArray = [
  //   'w',
  //   'i',
  //   't',
  //   'h',
  //   ' ',
  //   'd',
  //   'e',
  //   's',
  //   'i',
  //   'g',
  //   'n',
  //   ',',
  //   ' ',
  //   'd',
  //   'e',
  //   'v',
  //   'e',
  //   'l',
  //   'o',
  //   'p',
  //   'm',
  //   'e',
  //   'n',
  //   't',
  //   ' ',
  //   '&',
  //   ' ',
  //   'i',
  //   'n',
  //   'n',
  //   'o',
  //   'v',
  //   'a',
  //   't',
  //   'i',
  //   'o',
  //   'n',
  // ]

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5000)

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
                idx={10} //10
              />
            </span>
            <br />
            <span className="job-h1">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={8} //12
              />
            </span>

            {/* <br /> */}
            {/* <span className="location-h1">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={locationArray}
                idx={17} //2
              />
            </span> */}
          </h1>
          {/* <h2>Front-End Developer</h2> */}
          {/* <h2>
            Bringing ideas to life through <br />
            design, development, and implementation.
          </h2> */}
          <h2>Digital Marketer | Developer </h2>

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
