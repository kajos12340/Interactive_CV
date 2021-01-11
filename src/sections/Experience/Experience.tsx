import React from 'react';

import SectionHeader from '../../Common/SectionHeader/SectionHeader';
import { Section } from '../../Common/Section/Section';
import NextSectionButton from '../../Common/NextSectionButton/NextSectionButton';

import {
  Content, Line, Node, Nodes, Dot, Description, Title, Time,
} from './Experience.styles';

interface TileLineItem {
  time: string,
  title: string,
  description: string,
}

const data: TileLineItem[] = [
  {
    time: '2012 - 2015',
    title: 'High school of Juliusz Słowacki in Otwock',
    description: 'Faculty: Mathematics-Physics',
  },
  {
    time: '2015 - 2018',
    title: 'Warsaw University of Life Sciences, WZIM, Informatics first degree',
    description: 'Thesis: Project and implementation of application managing a dental clinic',
  },
  {
    time: '07.2017 - 11.2017',
    title: 'Junior .NET developer at Business Data Process sp. z o.o.',
    description: 'Implementation of application to manage company\'s structure, documents, employees and their working time according to current polish law. Technologies used ASP.NET MVC, ASP.NET API, Javascipt (Angular JS), HTML, CSS',
  },
  {
    time: '2018 - 2019',
    title: 'Warsaw University of Life Sciences, WZIM, Informatics second degree',
    description: 'Thesis: Application for mobile devices to monitor powerlifting training',
  },
  {
    time: 'since 05.2018',
    title: 'Front-end developer at Idea Bank s.a.',
    description: 'Implementation of internal customer relationship management application used by employees of the company. Technologies used: React, JavaScript (ES6+), Redux, Jest, Enzyme, Marionette, HTML, CSS',
  },
];

const Experience = () => (
  <Section id="experience" primaryColor noMinHeight={false}>
    <SectionHeader title="Timeline" />
    <Content>
      <Line />
      <Nodes>
        {data.map((item) => (
          <Node key={item.title}>
            <Dot />
            <Time>{item.time}</Time>
            <Title>
              {item.title}
            </Title>
            <Description>{item.description}</Description>
          </Node>
        ))}
      </Nodes>
    </Content>
    <NextSectionButton to="skills" rightAligned />
  </Section>
);

export default Experience;
