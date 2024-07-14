// import { useEffect, useState } from 'react'

// export const useMessage = () => {
//   const [index, setIndex] = useState(0)
//   const [textEffect, setText] = useState('')
//   const [final, setFinal] = useState(false)

//   useEffect(() => {
//     const frase = 'Front-end Developer'
//     const interval = setInterval(() => {
//       if (index < frase.length) {
//         setText((prevText) => prevText + frase.charAt(index))
//         setIndex((prevIndex) => prevIndex + 1)
//       } else {
//         clearInterval(interval)
//         setFinal(true)
//       }
//     }, 80)

//     return () => clearInterval(interval)
//   }, [index])

//   return {
//     final,
//     textEffect,
//   }
// }
