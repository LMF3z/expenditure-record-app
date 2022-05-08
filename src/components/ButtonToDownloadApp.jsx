import React from 'react';
import DownloadIcon from '../resources/icons/DownloadIcon';

const ButtonToDownloadApp = ({ handleClick }) => {
  return (
    <div className="w-12 h-12 fixed bg-blue bottom-20 right-5 rounded-full flex flex-col justify-center items-center z-50">
      <DownloadIcon
        color={'white'}
        classes="w-6 h-6 cursor-pointer"
        handleClick={handleClick}
      />
    </div>
  );
};

export default ButtonToDownloadApp;
