import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import NextSectionButton from '../../Common/NextSectionButton/NextSectionButton';

import {
  Container, Content, Particles, WordScroller,
} from './Title.styles';

gsap.registerPlugin(ScrollToPlugin);
const Title = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const singleScrollerChild = scroller?.children[0] as HTMLElement;

    if (!scroller || !singleScrollerChild) return;

    const scrollerItemHeight = singleScrollerChild.offsetHeight;
    const tl = gsap.timeline({
      repeat: -1,
    });

    tl.to(scroller, { y: -scrollerItemHeight, duration: 0.5, delay: 1 })
      .to(scroller, { y: -scrollerItemHeight * 2, duration: 0.5, delay: 1 })
      .to(scroller, { y: -scrollerItemHeight * 3, duration: 0.5, delay: 1 })
      .to(scroller, { y: 0, duration: 0.5, delay: 1 });
  }, [scrollerRef]);

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
            <WordScroller>
              <div ref={scrollerRef}>
                <div>developer</div>
                <div>engineer</div>
                <div>lover</div>
                <div>addict</div>
              </div>
            </WordScroller>
          </div>
        </div>
      </Content>
      <NextSectionButton to="about" />
    </Container>
  );
};

export default Title;
