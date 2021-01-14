export const updateHash = (elementId: string) => {
  const currentHash = window.location.hash;
  const newHash = `#${elementId}`;

  if (newHash === currentHash) return;

  const anchor = document.createElement('a');
  anchor.href = newHash;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
};

export const scrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  element?.scrollIntoView();
};
