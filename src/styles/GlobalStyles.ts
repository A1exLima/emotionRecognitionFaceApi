import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --font-Archivo: "Archivo", sans-serif;
    --font-Roboto: "Roboto", sans-serif;

    font-size: 62.5%;
    
    @media (max-width: 768px) {
          font-size: 52.5%;
    }
  }

  body {
    background: ${({ theme }) => theme.background};
    font-family: var(--font-Inter);
    font-size: 1.6rem;
    color: ${({ theme }) => theme['default-text']};
    
    -webkit-font-smoothing: antialiased;
  }
`
