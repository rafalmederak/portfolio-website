import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing:border-box;
    }

    #root{
        margin: 0 auto;
    }

    html {
        font-size: 62.5%;
    }
   
    body {
        font-size: 1.6rem;
        font-family: "Poppins", sans-serif;
        color: ${({ theme }) => theme.color.gray800};
    }

    ul, ol {
        list-style: none;
    }

    a {
        color: ${({ theme }) => theme.color.gray800};
        text-decoration: none;
    }

    button, input {
        border: none;
        font-family: "Poppins", sans-serif;    
    }

    button {
        cursor: pointer;
    }

    ::-webkit-scrollbar {
    width: 6px;
    }
    
    ::-webkit-scrollbar-thumb {
    background:  ${({ theme }) => theme.color.gray200};
    border-radius: 20px;
    }

    ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.color.gray100};
    border-radius: 20px;
    }

    .MuiDialog-root {
    margin: 0; 
    ${({ theme }) => theme.screens.xl} {
        margin-left: 28rem;
    }
    }

    .MuiPaper-root { 
    margin: 0; 
    width: 92%;
    max-width: initial;
    max-height: initial;
    height: 94vh;
    }

`;

export default GlobalStyle;
