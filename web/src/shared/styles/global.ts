import { createGlobalStyle, css } from "styled-components";

interface GlobalStylesProps {
  isDarkTheme: boolean;
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`

  :root {
    --GREEN: #8C52FF;
    --LIGHT-GREEN: #F9F9F9;
    --DARK-BLUE:rgb(73, 33, 33);
    --GRAY: #828282;
    --LIGHT-GRAY: #d9d9d9;
  }

  ${(props) =>
    props.isDarkTheme
      ? css`
          :root {
            --BackgroundColor: #0f0f0f;
            --Font-text: #fff;
          }
        `
      : css`
          :root {
            --BackgroundColor: #fff;
            --Font-text: #1e1e1e;
          }
        `}
  
  html,
  body,
  #__next {
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
    background-color: var(--BackgroundColor);
  }

  mark {
    color: var(--GREEN);
    background-color: transparent;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }


  h1, h2, h3, h4, p, #text {
    margin: 0;
    font-family: 'Inter';
    font-style: normal;
    color: var(--Font-text);
  }

  h1 {
    font-weight: 700;
    font-size: 48px;
  }

  h2 {
    font-weight: 400;
    font-size: 32px;
  }

  h3 {
    font-weight: 700;
    font-size: 24px;
  }

  h4 {
    font-weight: 400;
    font-size: 16px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
  }

  button {
    cursor: pointer;
    outline: none;
    appearance: none;
    border: none;
    background: transparent;
  }
  
`;