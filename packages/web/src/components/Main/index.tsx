import * as S from './styles'

const Main = ({ title = 'React Avançado' }) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Imagem de uma logo" />
    <S.Title>{title}</S.Title>
    {/* <S.Description>Typescript, React, NextJS</S.Description> */}
    <S.Illustration
      src="/img/forniture-illustration"
      alt="Ilustração de um móvel"
    ></S.Illustration>
  </S.Wrapper>
)

export default Main
