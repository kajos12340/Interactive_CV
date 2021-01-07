import React from 'react';

import SectionHeader from '../../Common/SectionHeader/SectionHeader';
import { Section } from '../../Common/Section/Section';
import NextSectionButton from '../../Common/NextSectionButton/NextSectionButton';

const Experience = () => (
  <Section id="experience" primaryColor>
    <SectionHeader title="Experience" />
    EXP!!!!
    <NextSectionButton to="skills" rightAligned />
  </Section>
);

export default Experience;
