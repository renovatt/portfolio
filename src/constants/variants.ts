type FadeVariantProps = {
  direction: 'up' | 'right' | 'down' | 'left'
  delay: number
}

export const fadeIn = ({ direction, delay }: FadeVariantProps) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      transition: {
        type: 'tween',
        duration: 0.5,
        delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.4,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  }
}

export const fadeScale = () => {
  return {
    hidden: {
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  }
}

export const BoingContainer = () => {
  return {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }
}

export const BoingItem = ({ value }: { value?: number }) => {
  return {
    hidden: { y: value, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }
}
