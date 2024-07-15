import Mecha from '../organisms/mecha'
import CanvaContainer from '../organisms/canva-container'

const SideMecha = () => {
  return (
    <section className="h-2/5 w-full md:h-full md:w-1/2">
      <CanvaContainer>
        <Mecha />
      </CanvaContainer>
    </section>
  )
}

export default SideMecha
