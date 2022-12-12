import React from 'react'
import * as S from './style'
import { RiCloseFill } from 'react-icons/ri'

export const Modal = ({ id }) => {

    const [modalData, setModalData] = React.useState([])

    async function openModal() {
        await fetch(`http://localhost:5000/projects?id=${id}`)
            .then(res => res.json())
            .then(json => setModalData(json))
    }

    React.useEffect(() => {
        openModal()
    }, [id])

    return (
        <S.ModalContainer>
            {id && modalData.map(project => (
                <S.ModalContent key={project.id}>
                    <RiCloseFill />
                    <S.BannerContainer>
                        <S.Banner banner={project.banner}>
                            <S.Shadow></S.Shadow>
                        </S.Banner>
                        <S.BannerName>{project.name}</S.BannerName>
                        <S.BannerDeploy href={project.link}>Deploy</S.BannerDeploy>
                    </S.BannerContainer>

                    <S.PreviewContainer>
                        <S.Thumbnail src={project.thumbnail}></S.Thumbnail>
                        <S.Description>{project.description}</S.Description>
                    </S.PreviewContainer>
                </S.ModalContent>
            ))}
        </S.ModalContainer>

        // <S.ModalContainer>
        //     <S.ModalContent>
        //         <RiCloseFill />
        //         <S.BannerContainer>
        //             <S.Banner banner={banner}>
        //                 <S.Shadow></S.Shadow>
        //             </S.Banner>
        //             <S.BannerName>{name}</S.BannerName>
        //             <S.BannerDeploy href={link}>Deploy</S.BannerDeploy>
        //         </S.BannerContainer>

        //         <S.PreviewContainer>
        //             <S.Thumbnail src={thumbnail}></S.Thumbnail>
        //             <S.Description>{description}</S.Description>
        //         </S.PreviewContainer>
        //     </S.ModalContent>
        // </S.ModalContainer>
    )
}
