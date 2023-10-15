import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import './index.scss'
import DeveloperMain from '../../../assets/images/developer-image3.png'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 10,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 1,
        duration: 5,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        src={DeveloperMain}
        className="solid-logo"
        ref={solidLogoRef}
        alt="font-end developer"
      ></img>
    </div>
  )
}

export default Logo
