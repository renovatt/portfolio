import * as S from './style'

export const Loading = () => {
    return (
        <S.LoadingContainer>
            <S.Loading>Carregando..</S.Loading>
            <S.ProgressBar>
                <S.Bar></S.Bar>
            </S.ProgressBar>
        </S.LoadingContainer>
    )
}
