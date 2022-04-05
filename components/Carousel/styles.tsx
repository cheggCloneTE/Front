import styled from '@emotion/styled';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Container = styled.div`
  padding-top: 20px;
`;

export const SliderContainer = styled(Slider)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 30px;

  .slick-active {
    width: 2px;
  }
  & div {
    height: 250px;
    border-radius: 20px;
  }
  .c1 {
    width: 200px;

    background-color: #124734;
    padding-top: 45px;

    img {
      max-width: 90%;
      max-height: 100%;
      width: 610px;
      height: 150px;
    }
  }
  .c2 {
    background-color: #b85ea4;
    padding-top: 45px;
    img {
    }
  }
  .c3 {
    background-color: #1ed7d0;
    padding-top: 45px;
    img {
    }
  }
  .c4 {
    background-color: #6158f2;
    padding-top: 45px;
    img {
    }
  }

  .slick-dots {
    top: 210px;
    /* .slick-active {
      button::before {
        color: #c1c1c1;
      }
    } */
    button::before {
      color: #e9e9e9;
    }
  }

  img {
    margin: auto;
    background-color: transparent;
    max-height: 75%;
  }
`;

export const CarouseMenuContainer = styled.div`
  position: absolute;
  margin: auto;
`;

export const CarouseMenu = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -20%);
  box-shadow: 0 0 5px 0 rgb(0 0 0 / 10%);

  display: flex;
  justify-content: center;
  align-items: center;

  height: 70px;
  width: 65vw;
  margin: auto;
  background-color: white;

  border-radius: 10px;

  .linkBox {
    padding: 0 80px;
    border-right: 1px solid #e3e3e3;
  }

  .linkBoxNoBorder {
    padding: 0 70px;
  }

  .link {
    color: black;
    font-size: 1.125rem;
    font-weight: 500;
    text-decoration: none;
  }
`;
