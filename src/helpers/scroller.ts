const scrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  element?.scrollIntoView();
};

export default scrollTo;
