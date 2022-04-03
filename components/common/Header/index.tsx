import React from 'react';
import { Link } from 'react-router-dom';

import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { HeaderContainer, HeaderWrapper, HeaderLeft, HeaderRight } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderLeft>
          <HiOutlineMenuAlt1 size={30} />
          <span className="title">aha q&a</span>
          <a>Q&A</a>
          <a>Connects</a>
        </HeaderLeft>

        <HeaderRight>
          <div>검색창</div>
          <span className="login">로그인</span>
          <span className="signup">회원가입</span>
        </HeaderRight>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
