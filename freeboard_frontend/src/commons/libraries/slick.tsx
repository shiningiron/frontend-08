import styled from "@emotion/styled";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickWrapper = styled.div`
  width: 1000px;
  height: 240px;
  margin-top: 20px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.75);
  border: 4px solid #6400ff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`;

const CustomSlider = styled(Slider)`
  .slick-dots li button:before {
    font-family: "slick";
    font-size: 6px;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: 20px;
    height: 20px;

    content: "•";
    text-align: center;

    opacity: 0.25;
    color: white;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: white;
  }
  .slick-slide {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 200px;
  }
`;

const ImageCard = styled.div``;

const Images = styled.img``;

export default function SlickLib() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SlickWrapper>
      <CustomSlider {...settings}>
        {new Array(3).fill(1).map((_, index) => (
          <ImageCard key={index}>
            <Images src="/images/purple.jpeg" />
          </ImageCard>
        ))}
      </CustomSlider>
    </SlickWrapper>
  );
}
