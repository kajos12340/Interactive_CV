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
    console.log(idx, sections.length - 1);
    if (idx === sections.length - 1) {
      console.log(sections, sections[0]);
      setNextSection(sections[0]);
    } else {
      setNextSection(sections[idx + 1]);
    }
  }, [sections, currentSection]);

  console.log(nextSection);
  return (
    <ScrollButtonContainer reverse={nextSection === 'title'}>
      <div ref={navigationButtonRef}>
        <FiArrowDownCircle onClick={() => scrollTo(nextSection)} />
      </div>
    </ScrollButtonContainer>
  );
};

export default NextSectionButton;
