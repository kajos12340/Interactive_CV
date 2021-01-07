import React from 'react';

import { BiCopy } from 'react-icons/bi';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { Section } from '../../Common/Section/Section';
import Button from '../../Common/Button/Button';

import { Container, Buttons } from './Contact.styles';

const mail = 'piotr.kajus@gmail.com';

const copyMail = () => {
  const input = document.createElement('input');
  input.value = mail;
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
};

const mailto = () => {
  window.location.href = mail;
};

const redirectToGithub = () => {
  window.open('https://github.com/kajos12340');
};

const redirectToLinedIn = () => {
  window.open('https://www.linkedin.com/in/piotr-kajka-3875b3151/');
};

const Contact = () => (
  <Section id="contact" primaryColor noMinHeight>
    <Container>
      <h1>
        Do you like my website?
        <br />
        Do you have some
        <span> job offer</span>
        ?
        <br />
        Or you simply have some
        <span> question</span>
        ?
        <br />
        Feel free to contact me, unless you are spam
        <span> :)</span>
      </h1>
      <Buttons>
        <Button onClick2={copyMail} onClick={mailto} secondaryChildren={<BiCopy />}>
          Mail to me
        </Button>
        <Button onClick={redirectToGithub}>
          Github
          {' '}
          <AiOutlineGithub />
        </Button>
        <Button onClick={redirectToLinedIn}>
          LinkedIn
          {' '}
          <AiFillLinkedin />
        </Button>
      </Buttons>
    </Container>
  </Section>
);

export default Contact;
