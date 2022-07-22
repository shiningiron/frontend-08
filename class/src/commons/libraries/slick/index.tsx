import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

const SliderWrapper = styled.div`
    padding: 20px;
`;

const ImgCardBox = styled.div`
    width: fit-content;
    height: auto;
`;

const ImgCard = styled.img`
    width: fit-content;
    height: fit-content;
`;

const TextCard = styled.p`
    font-size: 20px;
`;

export default function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };
    return (
        <SliderWrapper>
            <h2> Single Item</h2>
            <Slider {...settings}>
                <ImgCardBox>
                    <ImgCard src="/purple.jpeg" />
                    <TextCard>1</TextCard>
                </ImgCardBox>
                <ImgCardBox>
                    <ImgCard src="/purple.jpeg" />
                    <TextCard>1</TextCard>
                </ImgCardBox>
                <ImgCardBox>
                    <ImgCard src="/purple.jpeg" />
                    <TextCard>1</TextCard>
                </ImgCardBox>
                <ImgCardBox>
                    <ImgCard src="/purple.jpeg" />
                    <TextCard>1</TextCard>
                </ImgCardBox>
            </Slider>
        </SliderWrapper>
    );
}
