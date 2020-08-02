import styled from 'styled-components';

export const SignInAndRegisterContainer = styled.div`
    width:850px;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;

    @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    align-items: center;


    > *:first-child {
      margin-bottom: 70px;
    }
  }
`