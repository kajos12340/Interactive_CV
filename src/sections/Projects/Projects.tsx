import React from 'react';

import SectionHeader from '../../Common/SectionHeader/SectionHeader';
import NextSectionButton from '../../Common/NextSectionButton/NextSectionButton';
import { Section } from '../../Common/Section/Section';
import Slider, { SingleProject } from './Slider/Slider';
import liftItImg from '../../assets/liftit.jpg';
import shopImg from '../../assets/shop.jpg';
import cvImg from '../../assets/cv.jpg';

import Button from '../../Common/Button/Button';

const openHref = (url: string) => {
  window.open(url);
};

const projectsData: SingleProject[] = [
  {
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    img: liftItImg,
    links: (
      <>
        <Button onClick={() => openHref('https://liftitnow.now.sh/')}>Website</Button>
        <Button onClick={() => openHref('https://github.com/kajos12340/MyEpicWorkout-UI')}>Github Front-end</Button>
        <Button onClick={() => openHref('https://github.com/kajos12340/MyEpicWorkout-API')}>Github Back-end</Button>
      </>
    ),
    title: 'LiftIT - body building training app',
  },
  {
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    img: shopImg,
    links: (
      <>
        <Button onClick={() => openHref('https://google.pl/')}>Website</Button>
        <Button onClick={() => openHref('https://google.pl/')}>Github Front-end</Button>
        <Button onClick={() => openHref('https://google.pl/')}>Github Back-end</Button>
      </>
    ),
    title: 'Epic shopping list',
  },
  {
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    img: cvImg,
    links: (
      <>
        <Button onClick={() => openHref('https://google.pl/')}>Website</Button>
        <Button onClick={() => openHref('https://google.pl/')}>Github Front-end</Button>
      </>
    ),
    title: 'Interactive CV',
  },
];

const Projects = () => (
  <Section id="projects" primaryColor noMinHeight={false}>
    <SectionHeader title="Projects" />
    <Slider data={projectsData} />
    <NextSectionButton to="hobby" rightAligned />
  </Section>
);

export default Projects;
