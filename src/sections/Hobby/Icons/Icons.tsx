import React, { useEffect, useRef } from 'react';
import {
  DiCode, FaGamepad, GiGuitarBassHead, GiGuitarHead, GiWeightLiftingUp,
} from 'react-icons/all';
import gsap from 'gsap';

import { Power2 } from 'gsap/gsap-core';
import { IconsContainer } from './Icons.styles';

const Icons = () => {
  const iconsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const iconsContainer = iconsContainerRef.current;
    if (!iconsContainer) return;

    const icons = Array.from(iconsContainer?.children);
    const tl = gsap.timeline({
      duration: 1,
      ease: Power2.easeInOut,
      repeat: -1,
      delay: 0,
    });
    icons.forEach((icon) => {
      tl
        .to(icon, {
          transform: 'scale(1.5)',
          duration: 0.7,
        })
        .to(icon, {
          transform: 'scale(1)',
          duration: 0.5,
        });
    });
  }, [iconsContainerRef]);

  return (
    <IconsContainer ref={iconsContainerRef}>
      <div>
        <GiGuitarBassHead />
      </div>
      <div>
        <GiGuitarHead />
      </div>
      <div>
        <GiWeightLiftingUp />
      </div>
      <div>
        <DiCode />
      </div>
      <div>
        <FaGamepad />
      </div>
    </IconsContainer>
  );
};

export default Icons;
