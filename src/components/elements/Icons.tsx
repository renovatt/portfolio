'use client'
import { SkillsTypeProps } from '@types'
import useStatusStore from 'store'

export default function Icons({ id, svg_link: svgLink }: SkillsTypeProps) {
  const { setStatus, clearStatus } = useStatusStore()
  return (
    <section
      key={id}
      onMouseOut={clearStatus}
      onMouseOver={() => setStatus(id)}
      className="flex items-center justify-center transition-all ease-in hover:scale-110"
    >
      <figure
        data-aos="fade-up"
        data-aos-delay="50"
        className="-z-10 h-24 w-24"
      >
        <object
          className="h-full w-full object-cover"
          type="image/svg+xml"
          data={svgLink}
          onMouseOut={clearStatus}
          onMouseOver={() => setStatus(id)}
        ></object>
      </figure>
    </section>
  )
}
