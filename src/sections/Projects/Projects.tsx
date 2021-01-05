import React from 'react';

import SectionHeader from '../../Common/SectionHeader/SectionHeader';
import NextSectionButton from '../../Common/NextSectionButton/NextSectionButton';
import { Section } from '../../Common/Section/Section';

const Projects = () => (
  <Section id="projects" primaryColor={false}>
    <SectionHeader title="Projects" />
    Projects!!!!
    <NextSectionButton to="hobby" rightAligned />
  </Section>
);

export default Projects;
