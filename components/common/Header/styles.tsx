import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const HeaderWrapper = styled.div`
  background-color: 'white';
  border-bottom: 1px solid #e3e3e3;
  box-shadow: 0 0 15px 0 #e3e3e3;
  padding: 15px 1.5rem;

  display: flex;
  justify-content: space-between;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .title {
    margin-left: 20px;
    font-size: x-large;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .login {
  }

  .signup {
  }
`;
