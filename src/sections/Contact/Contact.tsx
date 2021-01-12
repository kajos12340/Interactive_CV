import React, { useRef } from 'react';
import gsap from 'gsap';

import { BiCopy } from 'react-icons/bi';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { Section } from '../../Common/Section/Section';
import Button from '../../Common/Button/Button';

import { Container, Buttons, CopiedAlert } from './Contact.styles';

const mail = 'piotr.kajus@gmail.com';

const mailto = () => {
  window.location.href = `mailto:${mail}`;
};

const redirectToGithub = () => {
  window.open('https://github.com/kajos12340');
};

const redirectToLinedIn = () => {
  window.open('https://www.linkedin.com/in/piotr-kajka-3875b3151/');
};

const Contact = () => {
  const alertRef = useRef<HTMLDivElement>(null);

  const showAlert = () => {
    const alert = alertRef.current;
    const tl = gsap.timeline();

    gsap.set(alert, { zIndex: 2 });

    tl
      .to(alert, {
        autoAlpha: 1, right: '1%', duration: 0.5,
      })
      .to(alert, {
        autoAlpha: 0, right: '-10%', delay: 1, zIndex: -1,
      });
  };

  const copyMail = () => {
    const input = document.createElement('input');
    input.value = mail;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showAlert();
  };

  return (
    <Section id="contact" primaryColor noMinHeight>
      <Container>
        <h1>
          Do you like my website?
          <br />
          Do you have some
          <span> job offer</span>
          ?
          <br />
          Or you simply have any
          <span> question</span>
          ?
          <br />
          Feel free to contact me, unless you are a spam
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
        <CopiedAlert ref={alertRef}>
          Email address has been copied to your clipboard!
        </CopiedAlert>
      </Container>
    </Section>
  );
};

export default Contact;
