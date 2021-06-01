import styled from 'styled-components';

export const Bar = styled.div`
  border-bottom: 1px solid rgba(0,0,0,0.1);
  margin: 0 auto;
  padding-bottom: 1rem;
  width: 100%;
  & form {
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    height: 100%;
    margin: 0 auto;
    max-width: 700px;
    width: 100%;
  }
`

export const Button = styled.button`
  margin-left: 5px;
  & svg {
    margin-left: 5px;
    position: relative;
    top: 2px;
  }
`
