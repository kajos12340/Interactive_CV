import gsap from 'gsap';

const scrollTo = (elementId: string) => {
  gsap.to(window, { duration: 1, scrollTo: { y: `#${elementId}` } });
};

export default scrollTo;
