import React from 'react';

const Button = (props) => {
  return (
      <input
          type="button"
          value={props.label}
      />
  );
}

// Export our button component.
export default Button;