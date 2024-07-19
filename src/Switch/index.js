import React from 'react';
import { useTheme } from '../ThemeContext';

const Switch = () => {
  const { toggleTheme } = useTheme();

  return (
    <div>
      <input
        type="checkbox"
        onChange={toggleTheme}
      />
    </div>
  );
};

export default Switch;
