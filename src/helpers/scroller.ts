// eslint-disable-next-line import/prefer-default-export
export const scrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  element?.scrollIntoView();
};
