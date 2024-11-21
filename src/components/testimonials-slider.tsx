"use client";

import Slider from "react-slick";
import { Box } from "@chakra-ui/react";
import TestimonialCard from "./testimonial-card";

function TestimonialsSlider() {
  // const [slideIndex, setSlideIndex] = useState(0);

  // const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear"
    // slidesToScroll: 1,
    // beforeChange: (_: any, next: number) => setSlideIndex(next),
    // nextArrow: (
    //   <IconButton
    //     bg="#000000"
    //     size="2xl"
    //     h="60px"
    //     borderRadius="50%"
    //     _hover={{ bg: "#000000" }}
    //     _active={{ bg: "#000000" }}
    //   />
    // ),
  };

  return (
    <Box>
      <Slider
        // ref={(slider) => {
        //   sliderRef.current = slider;
        // }}
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
