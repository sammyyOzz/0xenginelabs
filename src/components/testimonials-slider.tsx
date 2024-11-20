"use client";

import Slider from "react-slick";
import { Box, IconButton } from "@chakra-ui/react";
import TestimonialCard from "./testimonial-card";
import { useRef, useState } from "react";

function TestimonialsSlider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    beforeChange: (_: any, next: number) => setSlideIndex(next),
    nextArrow: (
      <IconButton
        bg="#000000"
        size="2xl"
        h="60px"
        borderRadius="50%"
        // _hover={{ bg: "#000000" }}
        // _active={{ bg: "#000000" }}
      />
    ),
  };

  // function handleNext() {
  //   if (slideIndex === 2) 
  // }

  return (
    <Box className="slider-container">
      <Slider
        ref={(slider) => {
          sliderRef.current = slider;
        }}
        {...settings}
      >
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </Slider>
    </Box>
  );
}

export default TestimonialsSlider;
