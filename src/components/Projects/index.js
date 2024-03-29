import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import ReelPeak from '../../assets/images/p-reelpeak2.png'
import Monticello from '../../assets/images/p-monticello2.png'
import Bhromoan from '../../assets/images/p-bhromaon.png'
import ActiveTrip from '../../assets/images/p-activetrip.png'
import StartupZ from '../../assets/images/p-startupz.png'
import PizzaApp from '../../assets/images/p-pizza-app.png'
import SaaS from '../../assets/images/p-saas.png'
import Bankapp from '../../assets/images/p-hooba.png'
import Flexen from '../../assets/images/p-flexen.png'
import instantQR from '../../assets/images/p-instantQR.png'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])
  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', '', 'p', 'r', 'o ', 'j', 'e', 'c', 't', 's']}
              idx={15}
              className="projects-mobile"
            />
          </h1>
          <p>
            Here are a few recent projects I've developed. Want to see more?
            <a
              href="https://github.com/elnurnabivi"
              className="flat-button projects-btn1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check my GitHub
            </a>
          </p>
        </div>

        <div className="projects-list">
          <div
            className="projects-list_item"
            style={{ backgroundImage: `url(${instantQR})` }}
          >
            <div className="projects-list_item_name">instantQR</div>
            <div className="projects-list_item_info">
              Custom QR Code generator
            </div>
            <div className="projects-list_item_tech">
              <span className="projects-list_item_tech_elements">React</span>
              <span className="projects-list_item_tech_elements">
                JavaScript
              </span>
              <span className="projects-list_item_tech_elements">Tailwind</span>
              <span className="projects-list_item_tech_elements">HTML</span>
              <span className="projects-list_item_tech_elements">API</span>
            </div>
            <div className="projects-list_item_links">
              <a
                href="https://instantqr.net/"
                className="flat-button "
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
              <a
                href="https://github.com/elnurnabivi/QR"
                className="flat-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>

          <div
            className="projects-list_item"
            style={{ backgroundImage: `url(${Flexen})` }}
          >
            <div className="projects-list_item_name">Flexen</div>
            <div className="projects-list_item_info">Task manager</div>
            <div className="projects-list_item_tech">
              <span className="projects-list_item_tech_elements">React</span>
              <span className="projects-list_item_tech_elements">
                TypeScript
              </span>
              <span className="projects-list_item_tech_elements">Tailwind</span>
              <span className="projects-list_item_tech_elements">HTML</span>
            </div>
            <div className="projects-list_item_links">
              <a
                href="https://elnurnabivi.github.io/flexen-app/"
                className="flat-button "
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
              <a
                href="https://github.com/elnurnabivi/flexen-app"
                className="flat-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>

          <div
            className="projects-list_item"
            style={{ backgroundImage: `url(${ReelPeak})` }}
          >
            <div className="projects-list_item_name">ReelPeak</div>
            <div className="projects-list_item_info">A movie database</div>
            <div className="projects-list_item_tech">
              <span className="projects-list_item_tech_elements">React</span>
              <span className="projects-list_item_tech_elements">
                JavaScript
              </span>
              <span className="projects-list_item_tech_elements">HTML</span>
              <span className="projects-list_item_tech_elements">CSS/SCSS</span>
              <span className="projects-list_item_tech_elements">API</span>
            </div>
            <div className="projects-list_item_links">
              <a
                href="https://elnurnabivi.github.io/ReelPeak/"
                className="flat-button "
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
              <a
                href="https://github.com/elnurnabivi/ReelPeak"
                className="flat-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>

          <div
            className="projects-list_item"
            style={{ backgroundImage: `url(${SaaS})` }}
          >
            <div className="projects-list_item_name">SaaS</div>
            <div className="projects-list_item_info">
              A UI/UX Design Subscription app
            </div>
            <div className="projects-list_item_tech">
              <span className="projects-list_item_tech_elements">React</span>
              <span className="projects-list_item_tech_elements">
                JavaScript
              </span>
              <span className="projects-list_item_tech_elements">HTML</span>
              <span className="projects-list_item_tech_elements">CSS</span>
              <span className="projects-list_item_tech_elements">Tailwind</span>
            </div>
            <div className="projects-list_item_links">
              <a
                href="https://elnurnabivi.github.io/Design-SaaS/"
                className="flat-button "
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
              <a
                href="https://github.com/elnurnabivi/Design-SaaS"
                className="flat-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>

          <div
            className="projects-list_item"
            style={{ backgroundImage: `url(${Bankapp})` }}
          >
            <div className="projects-list_item_name">HooBank</div>
            <div className="projects-list_item_info">
              A mobile-friendly web app designed to provide a seamless banking
              experience.
            </div>
            <div className="projects-list_item_tech">
              <span className="projects-list_item_tech_elements">React</span>
              <span className="projects-list_item_tech_elements">
                JavaScript
              </span>
              <span className="projects-list_item_tech_elements">HTML</span>
              <span className="projects-list_item_tech_elements">CSS</span>
              <span className="projects-list_item_tech_elements">Tailwind</span>
            </div>
            <div className="projects-list_item_links">
              <a
                href="https://elnurnabivi.github.io/Bank-app/"
                className="flat-button "
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
              <a
                href="https://github.com/elnurnabivi/Bank-app"
                className="flat-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>

          <div
            className="projects-list_item"
            style={{ backgroundImage: `url(${StartupZ})` }}
          >
            <div className="projects-list_item_name">StartupZ</div>
            <div className="projects-list_item_info">
              Platform dedicated to helping startups thrive
            </div>
            <div className="projects-list_item_tech">
              <span className="projects-list_item_tech_elements">
                JavaScript
              </span>
              <span className="projects-list_item_tech_elements">React </span>
              <span className="projects-list_item_tech_elements">CSS/SCSS</span>
              <span className="projects-list_item_tech_elements">HTML</span>
              <span className="projects-list_item_tech_elements">Formik</span>
            </div>
            <div className="projects-list_item_links">
              <a
                href="https://elnurnabivi.github.io/StartupZ/"
                className="flat-button "
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
              <a
                href="https://github.com/elnurnabivi/StartupZ"
                className="flat-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>

          <div
            className="projects-list_item"
            style={{ backgroundImage: `url(${Monticello})` }}
          >
            <div className="projects-list_item_name">Monticello</div>
            <div className="projects-list_item_info">
              Landing page of an architecture company
            </div>
            <div className="projects-list_item_tech">
              <span className="projects-list_item_tech_elements">
                JavaScript
              </span>
              <span className="projects-list_item_tech_elements">CSS/SCSS</span>
              <span className="projects-list_item_tech_elements">HTML</span>
              <span className="projects-list_item_tech_elements">jQuery</span>
              <span className="projects-list_item_tech_elements">
                Bootstrap
              </span>
              <span className="projects-list_item_tech_elements">API</span>
            </div>
            <div className="projects-list_item_links">
              <a
                href="https://elnurnabivi.github.io/Monticello/"
                className="flat-button "
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
              <a
                href="https://github.com/elnurnabivi/Monticello"
                className="flat-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>

          <div
            className="projects-list_item"
            style={{ backgroundImage: `url(${PizzaApp})` }}
          >
            <div className="projects-list_item_name">Pizza restaurant</div>
            <div className="projects-list_item_info">
              Pizza ordering website
            </div>
            <div className="projects-list_item_tech">
              <span className="projects-list_item_tech_elements">
                JavaScript
              </span>
              <span className="projects-list_item_tech_elements">React </span>
              <span className="projects-list_item_tech_elements">CSS</span>
              <span className="projects-list_item_tech_elements">HTML</span>
            </div>
            <div className="projects-list_item_links">
              <a
                href="https://elnurnabivi.github.io/Pizza-restaurant/"
                className="flat-button "
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
              <a
                href="https://github.com/elnurnabivi/Pizza-restaurant"
                className="flat-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>

          <div
            className="projects-list_item"
            style={{ backgroundImage: `url(${Bhromoan})` }}
          >
            <div className="projects-list_item_name">Bhromaon</div>
            <div className="projects-list_item_info">A safe travel company</div>
            <div className="projects-list_item_tech">
              <span className="projects-list_item_tech_elements">
                JavaScript
              </span>
              <span className="projects-list_item_tech_elements">CSS/SCSS</span>
              <span className="projects-list_item_tech_elements">HTML</span>
            </div>
            <div className="projects-list_item_links">
              <a
                href="https://elnurnabivi.github.io/Bhromaon/"
                className="flat-button "
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
              <a
                href="https://github.com/elnurnabivi/Bhromaon"
                className="flat-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
          <div
            className="projects-list_item"
            style={{ backgroundImage: `url(${ActiveTrip})` }}
          >
            <div className="projects-list_item_name">Active Trip</div>
            <div className="projects-list_item_info">A travel company</div>
            <div className="projects-list_item_tech">
              <span className="projects-list_item_tech_elements">
                JavaScript
              </span>
              <span className="projects-list_item_tech_elements">CSS/SCSS</span>
              <span className="projects-list_item_tech_elements">HTML</span>
              <span className="projects-list_item_tech_elements">
                Bootstrap
              </span>
            </div>
            <div className="projects-list_item_links">
              <a
                href="https://github.com/elnurnabivi/active-trip-website"
                className="flat-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
        <a
          href="https://github.com/elnurnabivi"
          className="flat-button projects-btn2"
          target="_blank"
          rel="noopener noreferrer"
        >
          See more projects
        </a>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
