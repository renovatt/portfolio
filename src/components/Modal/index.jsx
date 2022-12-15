import React from 'react'
import * as S from './style'
import { RiCloseFill } from 'react-icons/ri'
import { Loading } from '../Helper/Loading'
import { Error } from '../Helper/Error'

export const Modal = ({ id, setModal }) => {

    const url = 'https://my-json-server.typicode.com/renovatt/portfolio/projects'
    const [modalData, setModalData] = React.useState([])
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

    function handleLoad({ target }) {
        target.style.opacity = 1
    }

    function handleCloseModal(e){
        if(e.target === e.currentTarget){
            setModal(null)
        }
    }

    return (
        <S.ModalContainer onClick={handleCloseModal}>
            {error && <Error />}
            {loading && <Loading />}
            {id && !loading && modalData.map(project => (
                <S.ModalContent key={project.id}>
                    <RiCloseFill onClick={() => setModal(null)}/>
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
