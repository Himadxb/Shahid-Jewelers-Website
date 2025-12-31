import React from 'react';

const ShinyText = ({ 
  text, 
  disabled = false, 
  speed = 3, 
  className = '',
  color = '#b5b5b5',
  shineColor = '#ffffff',
  style = {}
}) => {
  const animationDuration = `${speed}s`;
  
  return (
    <span
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{
        backgroundImage: `linear-gradient(120deg, transparent 40%, ${shineColor} 50%, transparent 60%)`,
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        animationDuration: animationDuration,
        color: color,
        display: 'inline-block',
        ...style
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
