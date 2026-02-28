import { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'

// How much each ring drifts on scroll (vertical) and on mouse move (x/y)
const RING_SCROLL_SPEEDS = [0.04, 0.07]
const RING_MOUSE_STRENGTH = [18, 12] // px travel at cursor edge

const Layout = () => {
  const ringsRef = useRef([])
  const scrollYRef = useRef(0)
  const mousePosRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const applyTransforms = () => {
      const { x, y } = mousePosRef.current
      ringsRef.current.forEach((el, i) => {
        if (!el) return
        const scrollOffset = scrollYRef.current * RING_SCROLL_SPEEDS[i]
        const mx = x * RING_MOUSE_STRENGTH[i]
        const my = y * RING_MOUSE_STRENGTH[i]
        el.style.transform = `translate(${mx}px, ${scrollOffset + my}px)`
      })
    }

    const handleScroll = () => {
      scrollYRef.current = window.scrollY
      applyTransforms()
    }

    const handleMouseMove = (e) => {
      // Normalize to -1 … +1 from center of viewport
      mousePosRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      }
      applyTransforms()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="App">
      <div className="parallax-rings" aria-hidden="true">
        {[...Array(2)].map((_, i) => (
          <span
            key={i}
            className={`parallax-ring parallax-ring--${i + 1}`}
            ref={(el) => (ringsRef.current[i] = el)}
          />
        ))}
      </div>
      <Sidebar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
