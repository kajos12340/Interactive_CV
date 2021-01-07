import React from 'react';

import SectionHeader from '../../Common/SectionHeader/SectionHeader';
import { Section } from '../../Common/Section/Section';
import NextSectionButton from '../../Common/NextSectionButton/NextSectionButton';

import {
  Content, Photo, Description, PhotoContainer,
} from './About.styles';

const About = () => (
  <Section id="about" primaryColor={false} noMinHeight={false}>
    <SectionHeader title="About me" />
    <Content>
      <PhotoContainer>
        <Photo />
      </PhotoContainer>
      <Description>
        <h2>
          Hello, welcome to my
          <span> website</span>
          !
        </h2>
        I&apos;m front-end developer with almost
        <span> three years </span>
        of commercial experience.
        <br />
        I&apos;ve graduated in Warsaw University of Life Sciences on Informatics with
        <span> master degree </span>
        in 2020.
        My career has began quite long before graduation,
        as I decided to start work during my studies, to test and improve
        my knowledge and abilities.
        <br />
        <br />
        I&apos;ve travelled a long way, to reach the point I&apos;m currently at, to
        be brave enough to tell with full responsibility &quot;
        <span>I am front-end developer</span>
        &quot;.
        At the same time I&apos;m aware of vast stack of challenges and obstacles which
        awaits me in my professional career, but it makes me rather
        <span> excited </span>
        than terrified.
      </Description>
    </Content>
    <NextSectionButton to="experience" rightAligned />
  </Section>
);

export default About;
