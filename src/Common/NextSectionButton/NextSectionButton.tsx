import React, { useEffect, useRef } from 'react';
import { FiArrowDownCircle } from 'react-icons/all';
import gsap from 'gsap';

import scrollTo from '../../helpers/scroller';

import { ScrollButtonContainer } from './NextSectionButton.styles';

interface NextSectionButtonProps {
  to: string,
  rightAligned?: boolean,
}

const NextSectionButton = ({ to, rightAligned = false }: NextSectionButtonProps) => {
  const navigationButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const navigationButton = navigationButtonRef.current;

    const tl = gsap.timeline({
      repeat: -1,
    });

    tl.to(navigationButton, { y: '-= 10', duration: 0.5, ease: 'easeOut' })
      .to(navigationButton, { y: '+= 10', duration: 1, ease: 'elastic.out(1, 0.3)' });
  }, [navigationButtonRef]);

  return (
    <ScrollButtonContainer rightAligned={rightAligned}>
      <div ref={navigationButtonRef}>
        <FiArrowDownCircle onClick={() => scrollTo(to)} />
      </div>
    </ScrollButtonContainer>
  );
};

export default NextSectionButton;
