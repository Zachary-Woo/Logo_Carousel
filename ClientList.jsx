import React from 'react';
import ClientLogos from './LogoCarousel/components/ClientLogos';
import SizeObserver, { SizeContext } from './LogoCarousel/utils/SizeObserver.jsx';

// Import logo images
import ashlyHomeStore from '../assets/clientLogos/Ashley-HomeStore.png';
import central from '../assets/clientLogos/Central-Perk.png';
import circleK from '../assets/clientLogos/Circle-K.png';
import GCash from '../assets/clientLogos/GCash.png';
import kohls from '../assets/clientLogos/Kohls.png';
import tool from '../assets/clientLogos/Tool.png';
import waitrose from '../assets/clientLogos/Waitrose.png';

// Array of logo images (duplicated to create an infinite scrolling effect)
const images = [
  ashlyHomeStore,
  central,
  circleK,
  GCash,
  kohls,
  tool,
  waitrose,

  ashlyHomeStore,
  central,
  circleK,
  GCash,
  kohls,
  tool,
  waitrose,
];

const ClientList = () => {
  return (
    <div className=''>
      {/* SizeObserver is a utility to track the window size (innerWidth) */}
      <SizeObserver>
        {/* Consume SizeContext to get the current innerWidth value */}
        <SizeContext.Consumer>
          {({ innerWidth }) => (
            // Container for the client logos with a fixed height and full width
            <div className="grid place-items-center h-[20vh] w-screen">
              {/* ClientLogos component displays the logos in a scrolling carousel */}
              <ClientLogos innerWidth={innerWidth} images={images} />
            </div>
          )}
        </SizeContext.Consumer>
      </SizeObserver>
    </div>
  );
};

export default ClientList;