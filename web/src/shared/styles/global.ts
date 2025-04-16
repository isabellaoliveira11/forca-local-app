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
  #__next,
  #root {
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
    background-color: var(--BackgroundColor);
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
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

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    a:nth-of-type(2) .logo {
      animation: logo-spin infinite 20s linear;
    }
  }

  .card {
    padding: 2em;
  }

  .read-the-docs {
    color: #888;
  }

`;
