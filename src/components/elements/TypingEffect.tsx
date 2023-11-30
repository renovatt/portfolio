'use client'
import ReactTypingEffect from 'react-typing-effect'

const TypingEffect = () => {
  return (
    <ReactTypingEffect
      text={'Front-End Developer'}
      speed={100}
      eraseSpeed={100}
      typingDelay={10}
      cursorClassName="text-primary-750 pl-1"
      className="text-xl text-primary-950 md:text-5xl"
    />
  )
}

export default TypingEffect
