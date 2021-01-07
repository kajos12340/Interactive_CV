import React from 'react';

import Title from '../sections/Title/Title';
import About from '../sections/About/About';
import Skills from '../sections/Skills/Skills';
import { Divider } from '../Common/Divider/Divider';
import Projects from '../sections/Projects/Projects';
import Hobby from '../sections/Hobby/Hobby';
import Contact from '../sections/Contact/Contact';
import Experience from '../sections/Experience/Experience';

const Content = () => (
  <main>
    <Title />
    <About />
    <Divider revert={false} />
    <Experience />
    <Divider revert />
    <Skills />
    <Divider revert={false} />
    <Projects />
    <Divider revert />
    <Hobby />
    <Divider revert={false} />
    <Contact />
  </main>
);

export default Content;
