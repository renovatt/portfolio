import React from 'react'
import { Modal } from '../Modal'
import thumb from '../../assets/thumbnail.png'

export const ModalTest = () => {

    const [projects, setProjects] = React.useState([])

    async function GetProjects() {
        await fetch('http://localhost:5000/projects')
            .then(response => response.json())
            .then(json => setProjects(json))
    }

    React.useEffect(() => {
        GetProjects()
        console.log(projects)
    }, [])


    return (
        <div>
            {/* <Modal
                name='Name'
                banner={thumb}
                thumbnail={thumb}
                link={'#'}
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quae quasi temporibus consequatur consequuntur enim in voluptas itaque natus libero corrupti eos vel, porro ipsam eligendi obcaecati sed debitis accusamus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quae quasi temporibus consequatur consequuntur enim in voluptas itaque natus libero corrupti eos vel, porro ipsam eligendi obcaecati sed debitis accusamus!' /> */}

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
