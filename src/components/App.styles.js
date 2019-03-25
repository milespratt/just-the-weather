import styled from 'styled-components';

const AppStyles = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;

  * {
    font-family: 'Ubuntu', sans-serif;
  }

  .control {
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    padding: 10px;
    outline: none;
  }

  /* APP BACKGROUND ANIMATION */
  background: linear-gradient(225deg, #82edd1, #e682ed);
  background-size: 400% 400%;
  -webkit-animation: AnimationName 10s ease infinite;
  -moz-animation: AnimationName 10s ease infinite;
  animation: AnimationName 10s ease infinite;

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export default AppStyles;
