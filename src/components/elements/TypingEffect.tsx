'use client'
import ReactTypingEffect from 'react-typing-effect'

const TypingEffect = () => {
  return (
    <ReactTypingEffect
      text={'Front-End Developer'}
      speed={100}
      eraseSpeed={100}
      typingDelay={10}
      cursorClassName="text-750 pl-1"
      className="text-xl text-950 lg:text-4xl"
    />
  )
}

export default TypingEffect
