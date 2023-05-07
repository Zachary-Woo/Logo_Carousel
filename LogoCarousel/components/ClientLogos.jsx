import React from 'react';
import SliderContainer, { SliderItem } from './Slider.jsx';

const ClientLogos = ({ images, innerWidth }) => (
  <>
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0} innerWidth={innerWidth}>
      {images.map((image) => (
        <SliderItem width={150} key={image}>
          <img className="object-contain h-20 w-40" src={image} alt="" />
        </SliderItem>
      ))}
    </SliderContainer>
  </>
);

export default ClientLogos;