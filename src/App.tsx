import { Card } from './components/card/card';
import styled from 'styled-components';
import { ThemeTogglerButton } from './components/theme-toggler-btn/theme-toggler-btn';
import { useContext } from 'react';
import { ThemeContext, themes } from './contexts/theme-context';

function App() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "Something has been wrong in Context, try again"
    )
  }

  const { theme } = context;
  const originalTheme = themes[theme];

  return (
    <>
      <MainContainer style={{ background: originalTheme.background }}>
        <Header>
          <Title style={{ color: originalTheme.card }}>Testing Context API with React + TypeScript</Title>
          <ThemeTogglerButton />
        </Header>
        <Cards>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Cards>
      </MainContainer>
    </>
  )
}

const MainContainer = styled.main`
  min-height: 100vh;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 100px 20px 100px;
  @media (max-width: 616px){
    padding: 20px;
    gap: 10px;
  }
`

const Title = styled.h1`
  @media (max-width: 1000px){
    font-size: 20px;
  }
  @media(max-width: 470px){
      font-size: 12px;
    }
`

const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
`

export default App