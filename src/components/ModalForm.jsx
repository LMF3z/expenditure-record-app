import React from 'react';
import CloseIcon from '../resources/icons/CloseIcon';

const ModalForm = ({ children, closeModal }) => {
  return (
    <div className="w-full h-screen p-5 bg_dark_blur fixed top-0 uppercase z-50 grid place-items-center">
      <div className="fixed top-5 right-4 lg:right-20">
        <CloseIcon
          handleClick={closeModal}
          classes="w-10 h-10 lg:w-16 lg:h-16 cursor-pointer"
          color={'#fff'}
        />
      </div>
      {children}
      {/* <div className="bg-white"></div> */}
    </div>
  );
};

export default ModalForm;
