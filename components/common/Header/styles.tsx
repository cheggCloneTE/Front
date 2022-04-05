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
  align-items:cetner;
  justify-content:center;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  
  flex:1;
  .title {
    margin-left: 20px;
    font-size: x-large;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  flex:1;
  & input[type='text']:focus {
    outline:none
  }
  .text{
    font-size:1rem;
    margin-left:1rem;
  }
  .login {

  }

  .signup {
  }
`;


export const HeaderContents = styled.div`
  width:90%;
  display:flex;
  align-items:center;
`;

