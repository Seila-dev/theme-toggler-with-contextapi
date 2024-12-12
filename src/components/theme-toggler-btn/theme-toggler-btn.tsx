// import { Button as OriginalButton } from "../button/button";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";

export const ThemeTogglerButton = () => {

    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(
            "Something has been wrong in Context, try again"
        )
    }

    const { theme, setTheme } = context;

    return (
        <Div>
            <Input type="checkbox" id="darkmode-toggle" onClick={() => setTheme(theme === "light" ? "dark" : "light")} />
            <Label htmlFor="darkmode-toggle"></Label>
        </Div>
    )
}

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const Label = styled.label`
    display: flex;
    width: 100px;
    height: 40px;
    position: relative;
    display: block;
    background: #ebebeb;
    border-radius: 200px;
    box-shadow: inset 0px 5px 15px rgba(0,0,0,0.4), inset 0px -5px 15px rgba(255,255,255,0.4);
    cursor: pointer;
    transition: 0.3s;
    @media(max-width: 420px){
        width: 50px;
        height: 22px;
    }
    &:after {
        transition: 0.3s;
        content: "";
        width: 35px;
        height: 35px;
        position: absolute;
        top: 3px;
        left: 3px;
        background: linear-gradient(180deg, #ffcc89, #d8860b);
        border-radius: 180px;
        box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
        @media(max-width: 420px){
            width: 17px;
            height: 17px;
        }
    }
    &:active:after{
        width: 45px;
        @media(max-width: 420px){
            width: 25px;
        }
    }
`

const Input = styled.input`
    width: 0;
    height: 0;
    visibility: hidden;
    &:checked + label {
        background: #242424;
    }
    &:checked + label:after {
        left: 95px;
        transform: translateX(-100%);
        background: linear-gradient(180deg, #fff,#fffc);
        @media(max-width: 420px){
            left: 45px;
        }
    }
`