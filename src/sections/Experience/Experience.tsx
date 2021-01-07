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
    time: '2019 - 2020',
    title: 'Idea-bank front end devik',
    description: 'asid jaisdjo asjdaisj diasdj oiasjd oasij doasijd oaisjd oiasjd oasjd oiasjd oaisjdo asijdo asjdoajs doiajsdoi jasdoi jasodij aosidj oasjdo aisjdaasid jaisdjo asjdaisj diasdj oiasjd oasij doasijd oaisjd oiasjd oasjd oiasjd oaisjdo asijdo asjdoajs doiajsdoi jasdoi jasodij aosidj oasjdo aisjdaasid jaisdjo asjdaisj diasdj oiasjd oasij doasijd oaisjd oiasjd oasjd oiasjd oaisjdo asijdo asjdoajs doiajsdoi jasdoi jasodij aosidj oasjdo aisjdaasid jaisdjo asjdaisj diasdj oiasjd oasij doasijd oaisjd oiasjd oasjd oiasjd oaisjdo asijdo asjdoajs doiajsdoi jasdoi jasodij aosidj oasjdo aisjdaasid jaisdjo asjdaisj diasdj oiasjd oasij doasijd oaisjd oiasjd oasjd oiasjd oaisjdo asijdo asjdoajs doiajsdoi jasdoi jasodij aosidj oasjdo aisjdaasid jaisdjo asjdaisj diasdj oiasjd oasij doasijd oaisjd oiasjd oasjd oiasjd oaisjdo asijdo asjdoajs doiajsdoi jasdoi jasodij aosidj oasjdo aisjdaasid jaisdjo asjdaisj diasdj oiasjd oasij doasijd oaisjd oiasjd oasjd oiasjd oaisjdo asijdo asjdoajs doiajsdoi jasdoi jasodij aosidj oasjdo aisjdaasid jaisdjo asjdaisj diasdj oiasjd oasij doasijd oaisjd oiasjd oasjd oiasjd oaisjdo asijdo asjdoajs doiajsdoi jasdoi jasodij aosidj oasjdo aisjda',
  },
  {
    time: '2019 - 2020',
    title: 'Idea-bank front end devik',
    description: 'asid jaisdjo asjdaisj diasdj oiasjd oasij doasijd oaisjd oiasjd oasjd oiasjd oaisjdo asijdo asjdoajs doiajsdoi jasdoi jasodij aosidj oasjdo aisjda',
  },
  {
    time: '2019 - 2020',
    title: 'Idea-bank front end devik',
    description: 'asid jaisdjo asjdaisj diasdj oiasjd oasij doasijd oaisjd oiasjd oasjd oiasjd oaisjdo asijdo asjdoajs doiajsdoi jasdoi jasodij aosidj oasjdo aisjda',
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
