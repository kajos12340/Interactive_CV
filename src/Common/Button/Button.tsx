import React from 'react';

import { Button as StyledButton, DoubleButton } from './Button.styles';

interface ButtonProps {
  onClick: () => any,
  onClick2?: () => any,
  children: String | React.ReactNode,
  secondaryChildren?: String | React.ReactNode,
}

const Button = ({
  onClick, onClick2, children, secondaryChildren,
}: ButtonProps) => {
  if (onClick2 && secondaryChildren) {
    return (
      <DoubleButton>
        <div onClick={onClick}>
          {children}
        </div>
        <div onClick={onClick2}>
          {secondaryChildren}
        </div>
      </DoubleButton>
    );
  }

  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
