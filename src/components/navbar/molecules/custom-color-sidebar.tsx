'use client'
import { colors } from '~static/colors'

export default function CustomColorSidebar() {
  const handleChangeColor = (newColor: string) => {
    document.documentElement.style.setProperty('--custom-950', newColor)
  }
  return (
    <section className="absolute bottom-8 right-0 z-50 hidden w-10 flex-col items-center justify-center space-y-4 py-4 hover:backdrop-blur-sm md:flex">
      {colors.map(({ color, className }, index) => (
        <div
          key={index}
          className="group flex items-center justify-center gap-2"
        >
          <p className="pointer-events-none absolute right-0 z-10 hidden -translate-x-10 whitespace-nowrap capitalize text-750 group-hover:inline-block group-hover:animate-fadeLeft">
            {className}
          </p>
          <button
            type="button"
            style={{ backgroundColor: color }}
            onClick={() => handleChangeColor(color)}
            className="border-black-white/70 z-20 size-6 cursor-pointer border opacity-15 transition-all ease-in hover:opacity-100"
          />
        </div>
      ))}
    </section>
  )
}
