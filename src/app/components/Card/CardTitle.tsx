type CardTitleProps = {
  text: string
}

const CardTitle = ({ text }: CardTitleProps) => {
  return (
    <h1 className="select-none text-center text-2xl font-bold text-textPrimary">
      {text}
    </h1>
  )
}

export default CardTitle
