type CardTitleProps = {
  text: string
}

const CardTitle = ({ text }: CardTitleProps) => {
  return (
    <h1 className="select-none text-center text-xl font-bold text-primary-950 md:text-2xl">
      {text}
    </h1>
  )
}

export default CardTitle
