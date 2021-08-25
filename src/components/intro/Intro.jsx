import { useEffect, useRef } from 'react'

import './intro.scss'

import { init } from 'ityped'

export default function Intro() {
  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,
      strings: ['Developer', 'Engineer']
    })
  }, [])

  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='assets/me.jpeg' alt='profile picture' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi there, I'm</h2>
          <h1>Abdullah</h1>
          <h3>
            A Software <span ref={textRef}></span>
          </h3>
        </div>
        <a href='#portfolio'>
          <img src='assets/down.png' alt='down icon' />
        </a>
      </div>
    </div>
  )
}
