import React from 'react';

const ItemList = ({ item }) => {
  return (
    <div className="container_cards_list my-5 p-5 text-base list-group-item">
      <div className="h-full col-span-1 flex justify-center items-center list-group-item-heading">
        <img
          src={item.img}
          alt="heartIcon"
          className="w-12 h-12 lg:w-16 lg:h-16"
        />
      </div>
      <div className="col-span-2 flex flex-col justify-evenly items-start list-group-item-heading">
        <p className="text-gray-400 font-bold lg:text-lg">
          {item.category_expend}
        </p>
        <p className="text-gray-600 font-bold text-xl md:text-2xl">
          {item.name_expend}
        </p>
        <p className="text-gray-600 font-bold text-xs md:text-sm">
          Creado: {item.date}
        </p>
      </div>
      <div className="h-full col-span-1 flex justify-center items-center list-group-item-heading">
        <p className="600 font-bold md:text-2xl lg:text-3xl">
          {item.amount_expend}$
        </p>
      </div>
    </div>
  );
};

export default ItemList;
