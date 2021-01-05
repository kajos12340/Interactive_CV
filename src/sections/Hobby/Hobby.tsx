import React from 'react';

import SectionHeader from '../../Common/SectionHeader/SectionHeader';
import NextSectionButton from '../../Common/NextSectionButton/NextSectionButton';
import { Section } from '../../Common/Section/Section';

const Hobby = () => (
  <Section id="hobby" primaryColor>
    <SectionHeader title="Hobby" />
    Hobby!!!!
    <NextSectionButton to="contact" rightAligned />
  </Section>
);

export default Hobby;
