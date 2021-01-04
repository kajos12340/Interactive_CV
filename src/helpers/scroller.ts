const scrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);

  if (!element) {
    throw new Error('Id given to \'scrollTo\' function doesn\'t exist');
  }

  element?.scrollIntoView({ behavior: 'smooth' });
};

export default scrollTo;
