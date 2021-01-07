import gsap from 'gsap';

const scrollTo = (elementId: string) => {
  gsap.to(window, { duration: 0.5, delay: 0.1, scrollTo: { y: `#${elementId}` } });
};

export default scrollTo;
