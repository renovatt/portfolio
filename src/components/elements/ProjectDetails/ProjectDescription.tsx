type ProjectDescriptionProps = {
  text: string
}

const ProjectDescription = ({ text }: ProjectDescriptionProps) => {
  return (
    <p className="mx-2 my-0 flex h-full w-full items-center justify-center p-2 text-justify text-primary-750 md:h-40">
      {text}
    </p>
  )
}

export default ProjectDescription
