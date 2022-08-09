import { createGlobalStyle } from "styled-components";

export const GlobalColor = [
  'rgb(255, 99, 132)',
  'rgb(54, 162, 235)',
  'rgb(248, 248, 116)',
  'rgb(125, 99, 203)',
  'rgb(211, 48, 83)',
]

const GlobalStyles = createGlobalStyle`
  :root {
    --font-title : 32px;
    --font-lg-large : 28px;
    --font-large : 24px;
    --font-lg-small: 18px;
    --font-main: 16px;
    --font-sm-large: 14px;
    --font-small: 12px;

    --color-main: skyblue;
    --color-chart: #fff;
    --color-chart-text: #000;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
    letter-spacing: 0;
  }

  button {
    border: none;
    cursor: pointer;
    box-sizing: content-box;
  }

  table,
  th,
  td {
    text-align: center;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 2px 4px;
    cursor: pointer;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`;

export default GlobalStyles;