'use client'
import ReactTypingEffect from "react-typing-effect";

function TypingEffect() {
  return (
    <ReactTypingEffect
      text={'Front-End Developer'}
      speed={100}
      eraseSpeed={100}
      typingDelay={10}
      cursorClassName="text-white pl-1"
      className='text-textPrimary text-xl md:text-5xl'
    />
  )
}

export default TypingEffect