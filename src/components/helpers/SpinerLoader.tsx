import { FaSpinner } from 'react-icons/fa'

const SpinerLoader = () => {
  return (
    <span className="flex w-[24rem] animate-spin items-center justify-center md:w-[35rem]">
      <FaSpinner className="h-24 w-24 text-primary-950" />
    </span>
  )
}

export default SpinerLoader
