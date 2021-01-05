import React from 'react';

import { Section } from '../../Common/Section/Section';
import NextSectionButton from '../../Common/NextSectionButton/NextSectionButton';
import SectionHeader from '../../Common/SectionHeader/SectionHeader';

const Skills = () => (
  <Section id="skills" primaryColor>
    <SectionHeader title="Skills" />
    Skillsy!!!!
    <NextSectionButton to="projects" rightAligned />
  </Section>
);

export default Skills;
