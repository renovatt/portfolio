import React from 'react'
import * as S from './style'
import { RiCloseFill } from 'react-icons/ri'
import { Loading } from '../Helper/Loading'
import { Error } from '../Helper/Error'
import { ModalTypeProps, ProjectsTypeProps } from '../../@types'
import { BASE_URL } from '../../services'

export const Modal = ({ id, setModal }: ModalTypeProps) => {
    // const local_url = "http://localhost:5000/projects"
    // const url = 'https://my-json-server.typicode.com/renovatt/portfolio/projects'

    const [project, setProjectData] = React.useState<ProjectsTypeProps>()
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)

    const openModal = async () => {
        setLoading(true)
        try {
            await fetch(`${BASE_URL}/projects/${id}`)
                .then(res => res.json())
                .then(json => setProjectData(json))
        } catch {
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    React.useEffect(() => {
        openModal()
    }, [id])

    const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>): void => {
        event.currentTarget.style.opacity = "1";
    }

    function handleCloseModal(event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) {
        if (event.target === event.currentTarget) {
            setModal(false);
        }
    }

    return (
        <S.ModalContainer
            onClick={(
                event: React.MouseEvent<HTMLElement> |
                    React.TouchEvent<HTMLElement>) => handleCloseModal(event)}>
            {error && <Error />}
            {loading && <Loading />}
            {id && !loading && (
                <S.ModalContent key={project?.id}>
                    <RiCloseFill onClick={() => setModal(false)} />
                    <S.BannerContainer>
                        <S.Banner banner_url={project?.banner_url!}>
                            <S.Shadow></S.Shadow>
                        </S.Banner>
                        <S.BannerName>{project?.project_name}</S.BannerName>
                        <S.BannerDeploy href={project?.deploy_url} target='_blank'>Deploy</S.BannerDeploy>
                    </S.BannerContainer>

                    <S.PreviewContainer>
                        <S.Thumbnail src={project?.thumbnail_url} onLoad={handleLoad}></S.Thumbnail>
                        <S.Description>{project?.description}</S.Description>
                        <S.TechsContainer>
                            {project?.techs.links.map(tech => (
                                <S.TechsNav key={tech.id}>
                                    <S.TechLink href={tech.link} target='_blank'>
                                        <S.TechImage onLoad={handleLoad} src={tech.svg_link} alt={tech.svg_name} />
                                    </S.TechLink>
                                </S.TechsNav>
                            ))}
                        </S.TechsContainer>
                    </S.PreviewContainer>
                </S.ModalContent>
            )}
        </S.ModalContainer>
    )
}
