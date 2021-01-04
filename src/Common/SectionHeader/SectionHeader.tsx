import React from 'react';

interface SectionHeaderProps {
  title: String,
}

const SectionHeader = ({ title }: SectionHeaderProps) => (
  <div>
    {title}
  </div>
);

export default SectionHeader;
