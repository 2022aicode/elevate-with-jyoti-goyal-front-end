import React from "react";
import Carousel from "react-material-ui-carousel";

const CustomCarousel = (props) => {

  return (
    <>
      <Carousel
          indicatorIconButtonProps={{
            style: {
                padding: '5px',
                color: '#D2E6E7'
            }
        }}
        activeIndicatorIconButtonProps={{
            style: {
                color: '#E55E4B'
            }
        }}
      >
        {props.children}
      </Carousel>
    </>
  );
};
export default CustomCarousel;
