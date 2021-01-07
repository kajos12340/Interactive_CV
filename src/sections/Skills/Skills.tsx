import React from 'react';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { BiGitPullRequest } from 'react-icons/bi';

import { Section } from '../../Common/Section/Section';
import NextSectionButton from '../../Common/NextSectionButton/NextSectionButton';
import SectionHeader from '../../Common/SectionHeader/SectionHeader';
import SkillTile from './SkillTile/SkillTile';

import { SkillTilesContainer } from './Skills.styles';

const Skills = () => (
  <Section id="skills" primaryColor={false}>
    <SectionHeader title="Skills" />
    <SkillTilesContainer>
      <SkillTile
        title="Back-end"
        description={(
          <>
            Field of software development I did only
            <span> hobbyist</span>
            .
            I use technologies below to grant my applications access to
            database and server&#8209;side operations by REST API.
            I would appreciate
            <span> opportunity to develop </span>
            my Back&#8209;end skills on professional project.
          </>
          )}
        icon={<FaNodeJs />}
        technologies={['Node.js', 'Express', 'SQL', 'MongoDB', 'REST API', 'HTTP']}
      />
      <SkillTile
        title="Front-end"
        description={(
          <>
            Definitely branch of web development I feel most confident at. I&apos;ve spent nearly
            three last years of my life creating GUI of huge banking CRM system.
            Besides that I enjoy creating smaller and bigger private projects,
            to continuously increase my knowledge and skills.
          </>
        )}
        icon={<FaReact />}
        technologies={['React', 'JavaScript', 'TypeScript', 'Redux', 'HTML', 'CSS', 'SCSS', 'Boostrap', 'Styled Components']}
      />
      <SkillTile
        title="Other"
        description="hadhashdh ashdhashd hashd ahadhashdh ashdhashd hashd ahadhashdh ashdhashd hashd ahadhashdh ashdhashd hashd ahadhashdh ashdhashd hashd ahadhashdh ashdhashd hashd a"
        icon={<BiGitPullRequest />}
        technologies={['Git', 'Jira', 'Bitbucket', 'Github', 'Git Flow']}
      />
    </SkillTilesContainer>
    <NextSectionButton to="projects" rightAligned />
  </Section>
);

export default Skills;
