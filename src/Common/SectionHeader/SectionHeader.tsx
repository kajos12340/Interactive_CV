import React from 'react';

import { Banner, Title, Container } from './SectionHeader.styles';

interface SectionHeaderProps {
  title: String,
}

const SectionHeader = ({ title }: SectionHeaderProps) => (
  <Container>
    <Banner />
    <Title>
      {title}
    </Title>
  </Container>
);

export default SectionHeader;
