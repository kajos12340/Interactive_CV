import React, { useState, useRef, useEffect } from 'react';
import { FiArrowDownCircle } from 'react-icons/fi';
import gsap from 'gsap';

import scrollTo from '../../helpers/scroller';

import {
  Container, Content, Particles, WordScroller, ScrollButtonContainer,
} from './Title.styles';

const Title = () => {
  const [currentAdjectiveNumber, setCurrentAdjectiveNumber] = useState(1);

  const scrollerRef = useRef<HTMLDivElement>(null);
  const navigationButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const navigationButton = navigationButtonRef.current;

    const tl = gsap.timeline({
      repeat: -1,
    });

    tl.to(navigationButton, { y: '-= 10', duration: 0.5, ease: 'easeOut' })
      .to(navigationButton, { y: '+= 10', duration: 1, ease: 'elastic.out(1, 0.3)' });
  }, [navigationButtonRef]);

  const scroll = () => {
    const scroller = scrollerRef.current;
    scroller?.scroll({
      top: currentAdjectiveNumber === 4 ? 1 : currentAdjectiveNumber * scroller.offsetHeight * 1.5,
      left: 0,
      behavior: 'smooth',
    });
    setCurrentAdjectiveNumber((prev) => (prev === 4 ? 1 : prev + 1));
  };

  useEffect(() => {
    const scrollTimeout = setInterval(scroll, 1500);

    return () => clearTimeout(scrollTimeout);
  }, [scrollerRef, currentAdjectiveNumber]);

  return (
    <Container id="title">
      <Particles
        params={{
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              resize: true,
            },
          },
          particles: {
            color: {
              value: '#e87400',
            },
            links: {
              color: '#e8dce3',
              distance: 160,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 100,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 5,
            },
          },
        }}
      />
      <Content>
        <div id="name-poster">
          <div id="name">Piotr Kajka</div>
          <div id="profession">
            Front-end
            {' '}
            <WordScroller ref={scrollerRef}>
              <div>developer</div>
              <div>engineer</div>
              <div>lover</div>
              <div>addict</div>
            </WordScroller>
          </div>
        </div>
        <ScrollButtonContainer ref={navigationButtonRef}>
          <FiArrowDownCircle onClick={() => scrollTo('about')} />
        </ScrollButtonContainer>
      </Content>
    </Container>
  );
};

export default Title;
