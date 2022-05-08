import React from 'react';
import PlusIcon from '../resources/icons/PlusIcon';

const ButtonAddExpenditure = ({ handleClick }) => {
  return (
    <div className="w-12 h-12 fixed bg-blue bottom-5 right-5 rounded-full flex justify-center items-center z-50">
      <PlusIcon
        color={'white'}
        classes="w-6 h-6 cursor-pointer"
        handleClick={handleClick}
      />
    </div>
  );
};

export default ButtonAddExpenditure;
