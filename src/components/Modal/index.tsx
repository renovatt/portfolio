import React from 'react'
import * as S from './style'
import { RiCloseFill } from 'react-icons/ri'
import { Loading } from '../Helper/Loading'
import { Error } from '../Helper/Error'
import { ModalTypeProps, ProjectsTypeProps } from '../../@types'

export const Modal = ({ id, setModal }: ModalTypeProps) => {

    const url = 'https://my-json-server.typicode.com/renovatt/portfolio/projects'
    const [modalData, setModalData] = React.useState<ProjectsTypeProps[]>([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)

    const openModal = async () => {
        setLoading(true)
        try {
            await fetch(`${url}?id=${id}`)
                .then(res => res.json())
                .then(json => setModalData(json))
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
            {id && !loading && modalData.map(project => (
                <S.ModalContent key={project.id}>
                    <RiCloseFill onClick={() => setModal(false)} />
                    <S.BannerContainer>
                        <S.Banner banner={project.banner}>
                            <S.Shadow></S.Shadow>
                        </S.Banner>
                        <S.BannerName>{project.name}</S.BannerName>
                        <S.BannerDeploy href={project.link} target='_blank'>Deploy</S.BannerDeploy>
                    </S.BannerContainer>

                    <S.PreviewContainer>
                        <S.Thumbnail src={project.thumbnail} onLoad={handleLoad}></S.Thumbnail>
                        <S.Description>{project.description}</S.Description>
                    </S.PreviewContainer>
                </S.ModalContent>
            ))}
        </S.ModalContainer>
    )
}
