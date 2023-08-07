type CardTitleProps = {
    text: string;
}

const CardTitle = ({ text }: CardTitleProps) => {
    return (
        <h1 className='text-center text-textPrimary text-2xl font-bold select-none'>{text}</h1>
    )
}

export default CardTitle;