import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import {Link} from "react-router-dom";
import "pure-react-carousel/dist/react-carousel.es.css";

const HomeSlider = (props) => {
  console.log(props);
  return (
    <CarouselProvider
      naturalSlideWidth={1920}
      naturalSlideHeight={700}
      dragEnabled={false}
      touchEnabled={false}
      totalSlides={props.slider_status === false ? 1 : props.data.length}
      className="carousel-provider"
    >
      <Slider>
        {
          props.data.map(( item, index ) => (
            <Slide index={index}>
              <div className="hero-container">
                <div className="hero-title">{item.field_slide_title}</div>
                <div className="hero-copy">
                  <div className="hero-copy-line __big">{item.field_slide_title}</div>
                  <div className="hero-copy-line">{item.field_slide_content}</div>
                </div>
                <Link to={!item.field_slide_button_link ? '/' : item.field_slide_button_link} className="hero-copy-cta">
                  {item.field_slide_button_title}
                </Link>
                <img src={item.field_slide_image} alt="" className="hero-top-img"></img>
              </div>
            </Slide>
          ))
        }
      </Slider>
    </CarouselProvider>
  );
};

export default HomeSlider;
