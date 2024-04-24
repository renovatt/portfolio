import CanvaContainer from '@organisms/canva-container'
import Mecha from '@organisms/mecha'

const SideMecha = () => {
  return (
    <section className="h-2/5 w-full md:h-[80%] md:w-3/6">
      <CanvaContainer>
        <Mecha />
      </CanvaContainer>
    </section>
  )
}

export default SideMecha
