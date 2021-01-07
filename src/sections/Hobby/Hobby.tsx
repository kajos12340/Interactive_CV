import React, {
  useEffect, useRef, useState,
} from 'react';
import gsap, { Power2 } from 'gsap';

import {
  GiGuitarHead, GiGuitarBassHead, GiWeightLiftingUp, DiCode, FaGamepad,
} from 'react-icons/all';
import SectionHeader from '../../Common/SectionHeader/SectionHeader';
import NextSectionButton from '../../Common/NextSectionButton/NextSectionButton';
import { Section } from '../../Common/Section/Section';

import { Content, IconsContainer, Video } from './Hobby.styles';

const Hobby = () => {
  const [videoWidth, setVideoWidth] = useState(0);

  const iconsContainerRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

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
  }, []);

  useEffect(() => {
    // const handleWindowResize = (e: UIEvent | null = null) => {
    const handleWindowResize = () => {
      const videoContainer = videoContainerRef.current;
      const containerWidth = videoContainer?.clientWidth || 0;
      setVideoWidth(containerWidth);
    };

    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [videoContainerRef]);

  return (
    <Section id="hobby" primaryColor={false} noMinHeight={false}>
      <SectionHeader title="Hobby" />
      <Content>
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
        <Video ref={videoContainerRef}>
          <iframe
            title="Video"
            width={videoWidth}
            height={videoWidth * 0.5625}
            src="https://www.youtube.com/embed/diyqLSP1kUg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Video>
      </Content>
      <NextSectionButton to="contact" rightAligned />
    </Section>
  );
};

export default Hobby;
