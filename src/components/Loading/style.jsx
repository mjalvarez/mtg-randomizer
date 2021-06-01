import styled from 'styled-components';
import { keyframes } from 'styled-components'

export const Load = styled.div `
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: 0;
  position: fixed;
  top: -15%;
  left: 49%;
`

export const Loader = styled.div`
  width: 60px;
`

export const spin = keyframes`
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg); }
`

export const load = keyframes`
  0% { content: 'Loading'; }
  33% { content: 'Loading.'; }
  67% {content: 'Loading..'; }
  100% { content: 'Loading...'; }
`
export const LoaderWheel = styled.div`
  animation: ${spin} 1s infinite linear;
  border: 2px solid rgba(30, 30, 30, 0.5);
  border-left: 4px solid #000;
  border-radius: 50%;
  height: 50px;
  margin-bottom: 10px;
  width: 50px;
`

export const LoaderText = styled.div`
  color: #000;
  font-family: arial, sans-serif;
  &:after {
    content: 'Loading';
    animation: ${load} 2s linear infinite;
  }
`

