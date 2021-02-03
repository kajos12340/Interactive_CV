import React, {
  useEffect, useRef, useState,
} from 'react';

import SectionHeader from '../../Common/SectionHeader/SectionHeader';
import { Section } from '../../Common/Section/Section';
import Icons from './Icons/Icons';

import { Content, Video, MobileIcons } from './Hobby.styles';

const Hobby = () => {
  const [videoWidth, setVideoWidth] = useState(0);

  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    <Section id="hobby" primaryColor={false} contactHeight={false}>
      <SectionHeader title="Hobby" />
      <Content>
        <Icons />
        <Video ref={videoContainerRef}>
          <iframe
            title="Video"
            width={videoWidth}
            height={videoWidth * 0.5625}
            src="https://www.youtube.com/embed/5BcZ3bXm-v0"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Video>
        <MobileIcons>
          <Icons />
        </MobileIcons>
      </Content>
    </Section>
  );
};

export default Hobby;
