import React from 'react';

import SectionHeader from '../../Common/SectionHeader/SectionHeader';
import { Section } from '../../Common/Section/Section';
import Slider, { SingleProject } from './Slider/Slider';
import liftItImg from '../../assets/liftit.jpg';
import shopImg from '../../assets/shop.jpg';
import cvImg from '../../assets/cv.jpg';

import Button from '../../Common/Button/Button';

const projectsData: SingleProject[] = [
  {
    description: 'LiftIt is application I\'ve created as my master degree. It\'s purpose is to plan, process, manage and overview powerlifting training, but due to it\'s architecture and solutions, it can be used for any type of training. Client side of this application is Progressive Web App created using TypeScript, Next.JS, Redux, Ant Design and Styled Components. Client side is REST API created with TypeScript, Node.js (Express) and MongoDB. Modules I\'m the most proud of are three stages training plan creation form, which enables to plan every aspect of training, training session which tells everything about current step of training, count reps and rest, statistics module, enabling us to continuously overview our progress and finally JWT Authorization.',
    img: liftItImg,
    links: (
      <>
        <Button href="https://liftitnow.now.sh/">Website</Button>
        <Button href="https://github.com/kajos12340/MyEpicWorkout-UI">Github Front-end</Button>
        <Button href="https://github.com/kajos12340/MyEpicWorkout-API">Github Back-end</Button>
      </>
    ),
    title: 'LiftIT - body building training app',
  },
  {
    description: 'I have created this application to make it easier to coordinate shopping with my fiancee. It enables us to add, remove and status products in real time, which makes our shopping much easier. To acquire this purpose application is based on WebSocket technology. Client site was created with TypeScript, React, Material-UI and Redux. Server side is Express REST API and MongoDB database with Mongoose.',
    img: shopImg,
    links: (
      <>
        <Button href="https://epic-shopper.netlify.app/">Website</Button>
        <Button href="https://github.com/kajos12340/epic-shoping-ui">Github Front-end</Button>
        <Button href="https://github.com/kajos12340/epic-shopping.api">Github Back-end</Button>
      </>
    ),
    title: 'My shopping list',
  },
  {
    description: 'This is the website you are currently at! I\'ve had really much fun creating this project, as I decided to avoid using (nearly) any component library as Reactstrap, And Design or Material-UI. It is simple SPA, meant to be my interactive CV created in recruitment purposes.',
    img: cvImg,
    links: (
      <Button href="https://github.com/kajos12340/Interactive_CV">Github</Button>
    ),
    title: 'Personal Website',
  },
];

const Projects = () => (
  <Section id="projects" primaryColor contactHeight={false}>
    <SectionHeader title="Projects" />
    <Slider data={projectsData} />
  </Section>
);

export default Projects;
