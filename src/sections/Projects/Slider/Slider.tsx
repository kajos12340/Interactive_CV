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
  const containerRef = useRef<HTMLDivElement>(null);

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
    setCurrentTab(data[currentElementIdx - 1].title);
    setCurrentElementIdx((prev) => prev - 1);
  };

  const handleRightSwitchClick = () => {
    setCurrentTab(data[currentElementIdx + 1].title);
    setCurrentElementIdx((prev) => prev + 1);
  };

  return (
    <Container ref={containerRef}>
      <Slides>
        <div ref={contentRef}>
          {data.map((item) => (
            <Slide>
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
