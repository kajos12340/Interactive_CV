import React from 'react';

import {
  Container, Icon, Technologies, Description,
} from './SkillTile.styles';

interface SkillTileProps {
  title: string,
  description: React.ReactNode,
  icon: React.ReactNode,
  technologies: string[],
}

const SkillTile = ({
  title, description, icon, technologies,
}: SkillTileProps) => (
  <Container>
    <Icon>
      {icon}
    </Icon>
    <h2>
      {title}
    </h2>
    <Description>
      {description}
    </Description>
    <Technologies>
      <h3>
        Languages & tools
      </h3>
      {technologies.map((tech) => (
        <div key={tech}>
          {tech}
        </div>
      ))}
    </Technologies>
  </Container>
);

export default SkillTile;
