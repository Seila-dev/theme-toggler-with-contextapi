import styled from "styled-components"
import { useContext } from "react";
import { ThemeContext, themes } from "../../contexts/theme-context";

export const Card = () => {
      const context = useContext(ThemeContext);
    
      if (!context) {
        throw new Error (
          "Something has been wrong in Context, try again"
        )
      }
    
      const { theme } = context;
      const originalTheme = themes[theme];


    return (
        <Div style={{backgroundColor: originalTheme.card, color: originalTheme.paragraph}}>
            <h1>Cartão</h1>
            <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nostrum cum beatae quae cumque architecto, quia qui eaque eligendi expedita vel accusantium repudiandae aspernatur quidem voluptates unde dolorem facere nam.</Paragraph>
        </Div>
    )
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 20px;
    background:rgb(40, 149, 238);
    border-radius: 10px;
    margin: 20px;
    color: #99AAB5;
    @media(max-width: 670px){
      width: 200px;
      font-size: 12px;
    }
`

const Paragraph = styled.p`
    font-size: 18px;
    @media(max-width: 670px){
      font-size: 12px;
    }
`