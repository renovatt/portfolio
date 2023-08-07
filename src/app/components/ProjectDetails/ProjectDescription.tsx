type ProjectDescriptionProps = {
    text: string;
}

const ProjectDescription = ({ text }: ProjectDescriptionProps) => {
    return (
        <p className='flex justify-center items-center text-justify w-full h-full md:h-40 p-2 my-0 mx-2 text-white'>
            {text}
        </p>
    )
}

export default ProjectDescription;