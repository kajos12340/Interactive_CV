import React, { useEffect, useRef, useState } from 'react';

import Title from '../sections/Title/Title';
import About from '../sections/About/About';
import Skills from '../sections/Skills/Skills';
import { Divider } from '../Common/Divider/Divider';
import Projects from '../sections/Projects/Projects';
import Hobby from '../sections/Hobby/Hobby';
import Contact from '../sections/Contact/Contact';
import Experience from '../sections/Experience/Experience';
import NextSectionButton from '../Common/NextSectionButton/NextSectionButton';

const getThresholdArray = () => {
  const tresholdArray = [];
  let i = 0.025;
  while (i < 1) {
    tresholdArray.push(i);
    i += 0.025;
  }
  return tresholdArray;
};

const intersectionOptions = {
  threshold: getThresholdArray(),
};

const Content = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [sections, setSections] = useState<string[]>([]);
  const [currentSection, setCurrentSection] = useState('title');

  useEffect(() => {
    if (!mainRef.current) return () => {};
    const children = Array.from(mainRef.current.children)
      .filter((i) => i.id);
    setSections(children.map((child) => child.id));

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const { id } = entry.target;
        const viewportHeight = entry?.rootBounds?.height;
        const viewportWidth = entry?.rootBounds?.width || 0;
        const currentEntryHeight = entry?.boundingClientRect?.height;
        const currentEntryVisibleHeight = currentEntryHeight * entry.intersectionRatio;

        if (!viewportHeight || !currentEntryHeight
          || !currentEntryVisibleHeight) {
          return;
        }

        const occupancyOfEntry = currentEntryVisibleHeight / viewportHeight;
        const contactBreakPoint = viewportWidth > 768 ? 0.25 : 0.7;
        if ((id === 'contact' && occupancyOfEntry > contactBreakPoint) || occupancyOfEntry > 0.9) {
          setCurrentSection(id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, intersectionOptions);

    children.forEach((child) => {
      observer.observe(child);
    });

    return () => {
      children.forEach((child) => {
        observer.unobserve(child);
      });
    };
  }, [mainRef]);

  useEffect(() => {
  }, []);

  return (
    <main ref={mainRef}>
      <NextSectionButton sections={sections} currentSection={currentSection} />
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
};

export default Content;
