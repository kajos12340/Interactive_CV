import React, { useEffect, useRef, useState } from 'react';
import { FiArrowDownCircle } from 'react-icons/all';
import gsap from 'gsap';

import { scrollTo } from '../../helpers/scroller';

import { ScrollButtonContainer } from './NextSectionButton.styles';

interface NextSectionButtonProps {
  sections: string[],
  currentSection: string,
}

const NextSectionButton = ({
  sections, currentSection,
}: NextSectionButtonProps) => {
  const navigationButtonRef = useRef<HTMLDivElement>(null);
  const clickTimerRef = useRef<number | null>(null);
  const [nextSection, setNextSection] = useState('');

  useEffect(() => {
    const navigationButton = navigationButtonRef.current;

    const tl = gsap.timeline({
      repeat: -1,
    });

    tl.to(navigationButton, { y: '-= 10', duration: 0.5, ease: 'easeOut' })
      .to(navigationButton, { y: '+= 10', duration: 1, ease: 'elastic.out(1, 0.3)' });
  }, [navigationButtonRef]);

  useEffect(() => {
    const idx = sections.findIndex((i) => i === currentSection);
    setNextSection(sections[(idx % (sections.length - 1)) + 1]);
  }, [sections, currentSection]);

  const handleClick = () => {
    const prevClickTime = +(clickTimerRef.current || 0);
    const now = +new Date();
    if (!prevClickTime || now - prevClickTime > 700) {
      clickTimerRef.current = now;
      scrollTo(nextSection);
    }
  };

  return (
    <ScrollButtonContainer reverse={currentSection === 'contact'}>
      <div ref={navigationButtonRef}>
        <FiArrowDownCircle onClick={handleClick} />
      </div>
    </ScrollButtonContainer>
  );
};

export default NextSectionButton;
