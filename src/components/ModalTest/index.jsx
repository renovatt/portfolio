import React from 'react'
import { Modal } from '../Modal'

export const ModalTest = () => {

    const [projects, setProjects] = React.useState([])

    async function openModal() {
        await fetch('http://localhost:5000/projects')
            .then(response => response.json())
            .then(json => setProjects(json))
    }

    React.useEffect(() => {
        openModal()
        console.log(projects)
    }, [])


    return (
        <div>
            {projects && projects.map(project => (
                <Modal
                    key={project.id}
                    name={project.name}
                    link={project.link}
                    banner={project.banner}
                    thumbnail={project.thumbnail}
                    description={project.description} />
            ))}
        </div>
    )
}
