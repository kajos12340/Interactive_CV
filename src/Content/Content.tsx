import React from 'react';

import Title from '../sections/Title/Title';
import About from '../sections/About/About';
import Skills from '../sections/Skills/Skills';
import { Divider } from '../Common/Divider/Divider';
import Projects from '../sections/Projects/Projects';
import Hobby from '../sections/Hobby/Hobby';
import Contact from '../sections/Contact/Contact';

const Content = () => (
  <main>
    <Title />
    <About />
    <Divider revert={false} />
    <Skills />
    <Divider revert />
    <Projects />
    <Divider revert={false} />
    <Hobby />
    <Divider revert />
    <Contact />
  </main>
);

export default Content;
