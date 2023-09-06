import React from 'react';

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    >
      Previous
    </div>
  );
};

export default SamplePrevArrow;

