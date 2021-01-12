import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import gsap from 'gsap';

import {
  Container, Dots, Dot, SwitchLeft, SwitchRight, Img, Slide, Slides, Buttons, Title, Description,
} from './Slider.styles';

export interface SingleProject {
  img: string,
  title: string,
  description: React.ReactNode,
  links: React.ReactNode,
}

interface SliderProps {
  data: SingleProject[],
}

const Slider = ({ data }: SliderProps) => {
  const [currentDataTab, setCurrentTab] = useState('');
  const [currentElementIdx, setCurrentElementIdx] = useState(0);

  const dotsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const touchPosition = useRef({
    start: 0,
    end: 0,
  });

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return () => null;

    const touchStart = (e: TouchEvent) => {
      const touchX = e.touches[0].clientX;
      touchPosition.current = {
        ...touchPosition.current,
        start: touchX,
      };
    };

    const touchMove = (e: TouchEvent) => {
      const touchX = e.touches[0].clientX;
      touchPosition.current = {
        ...touchPosition.current,
        end: touchX,
      };
    };

    const touchEnd = () => {
      const { start: touchStartX, end: touchEndX } = touchPosition.current;

      if (touchEndX - touchStartX > 70) {
        handleLeftSwitchClick();
      } else if (touchStartX - touchEndX > 70) {
        handleRightSwitchClick();
      }
    };

    content.addEventListener('touchstart', touchStart);
    content.addEventListener('touchmove', touchMove);
    content.addEventListener('touchend', touchEnd);

    return () => {
      content.removeEventListener('touchstart', touchStart);
      content.removeEventListener('touchmove', touchMove);
      content.removeEventListener('touchend', touchEnd);
    };
  }, [contentRef, touchPosition, currentElementIdx]);

  useEffect(() => {
    if (!dotsRef.current || !contentRef.current) return;
    const dots: Element[] = Array.from(dotsRef.current.children);
    let currentChosenDot = dots[0];
    let currentTileNumber = 0;
    dots.forEach((dot, index) => {
      if (dot.getAttribute('data-title') === currentDataTab) {
        currentChosenDot = dot;
        currentTileNumber = index;
      } else {
        gsap.to(dot, { backgroundColor: 'white', duration: 0.5 });
      }
    });
    gsap.to(currentChosenDot, { backgroundColor: '#bd5f00', duration: 0.5 });

    const containerWidth = contentRef.current.clientWidth;
    const content = contentRef.current;
    gsap.to(content, { x: -containerWidth * currentTileNumber });
    setCurrentElementIdx(currentTileNumber);
  }, [currentDataTab]);

  const handleLeftSwitchClick = () => {
    if (currentElementIdx === 0) return;

    setCurrentTab(data[currentElementIdx - 1].title);
    setCurrentElementIdx((prev) => prev - 1);
  };

  const handleRightSwitchClick = () => {
    if (currentElementIdx === data.length - 1) return;

    setCurrentTab(data[currentElementIdx + 1].title);
    setCurrentElementIdx((prev) => prev + 1);
  };

  return (
    <Container>
      <Slides>
        <div ref={contentRef}>
          {data.map((item) => (
            <Slide key={item.img}>
              <Img photo={item.img} />
              <Title>
                {item.title}
              </Title>
              <Description>
                {item.description}
              </Description>
              <Buttons>
                {item.links}
              </Buttons>
            </Slide>
          ))}
        </div>
      </Slides>
      {currentElementIdx > 0 && (
        <SwitchLeft>
          <IoIosArrowBack onClick={handleLeftSwitchClick} />
        </SwitchLeft>
      )}
      {currentElementIdx < data.length - 1 && (
        <SwitchRight>
          <IoIosArrowForward onClick={handleRightSwitchClick} />
        </SwitchRight>
      )}
      <Dots ref={dotsRef}>
        {data.map((item) => (
          <Dot
            key={item.title}
            onClick={() => setCurrentTab(item.title)}
            data-title={item.title}
          />
        ))}
      </Dots>
    </Container>
  );
};

export default Slider;
