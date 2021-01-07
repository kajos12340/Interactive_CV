import React from 'react';

import { Banner, Title, Container } from './SectionHeader.styles';

interface SectionHeaderProps {
  title: String,
}

const SectionHeader = ({ title }: SectionHeaderProps) => (
  <Container>
    <div>
      <Banner />
      <Title>
        {title}
      </Title>
    </div>
  </Container>
);

export default SectionHeader;
