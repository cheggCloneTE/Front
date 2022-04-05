import React from 'react';
import { Link } from 'react-router-dom';

import { Container, SliderContainer, CarouseMenu, CarouseMenuContainer } from './styles';

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,

    appendDots: (dots: any) => (
      <ul>
        {dots.map((item: any, index: any) => {
          return (
            <li style={{ width: '6px' }} key={index}>
              {item.props.children}
            </li>
          );
        })}
      </ul>
    ),
  };

  return (
    <>
      <Container>
        <SliderContainer {...settings} arrows={false}>
          <div className="c1">
            <a>
              <img src="img/carousel_1@3x.png" />
            </a>
          </div>
          <div className="c2">
            <a>
              <img src="img/carousel_2@3x.png" />
            </a>
          </div>
          <div className="c3">
            <a>
              <img src="img/carousel_3@3x.png" />
            </a>
          </div>
          <div className="c4">
            <a>
              <img src="img/carousel_4@3x.png" />
            </a>
          </div>
        </SliderContainer>

        <CarouseMenu>
          <div className="linkBox">
            <Link to="/" className="link">
              출석스탬프
            </Link>
          </div>

          <div className="linkBox">
            <Link to="/" className="link">
              지식프로필
            </Link>
          </div>

          <div className="linkBox">
            <Link to="/" className="link">
              룰렛이벤트
            </Link>
          </div>

          <div className="linkBoxNoBorder">
            <Link to="/" className="link">
              계정설정
            </Link>
          </div>
        </CarouseMenu>
      </Container>
    </>
  );
};

export default Carousel;
