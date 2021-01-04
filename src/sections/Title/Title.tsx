import React from 'react';

import { Container, Content, Particles } from './Title.styles';

const Title = () => (
  <Container>
    <Particles
      params={{
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            resize: true,
          },
        },
        particles: {
          color: {
            value: '#e87400',
          },
          links: {
            color: '#e8dce3',
            distance: 160,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 1.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 100,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 5,
          },
        },
      }}
    />
    <Content>
      <div>
        <div id="name">Piotr Kajka</div>
        <div id="profession">
          Front-end
          {' '}
          <span>developer</span>
        </div>
      </div>
    </Content>
  </Container>
);

export default Title;
