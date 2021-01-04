import React from 'react';

import SectionHeader from '../../Common/SectionHeader/SectionHeader';

import { Content, Photo } from './About.styles';

const About = () => (
  <section id="about">
    <SectionHeader title="About me" />
    <Content>
      <Photo />
    </Content>
  </section>
);

export default About;
