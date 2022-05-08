import React from 'react';

const ButtonIcon = ({ icon, label, classes, handleClick, type }) => {
  return (
    <button
      type={type || 'button'}
      className={`w-full ${classes}`}
      onClick={handleClick}
    >
      <div className="svg-wrapper-1">
        <div className="svg-wrapper">{icon}</div>
      </div>
      <span>{label}</span>
    </button>
  );
};

export default ButtonIcon;
