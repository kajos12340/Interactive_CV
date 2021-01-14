import React from 'react';

import { Button as StyledButton, DoubleButton } from './Button.styles';

interface ButtonProps {
  href: string,
  onClick2?: () => any,
  children: String | React.ReactNode,
  secondaryChildren?: String | React.ReactNode,
}

const Button = ({
  href, onClick2, children, secondaryChildren,
}: ButtonProps) => {
  if (onClick2 && secondaryChildren) {
    return (
      <DoubleButton>
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
        <div onClick={onClick2}>
          {secondaryChildren}
        </div>
      </DoubleButton>
    );
  }

  return (
    <StyledButton target="_blank" rel="noreferrer" href={href}>
      {children}
    </StyledButton>
  );
};

export default Button;
