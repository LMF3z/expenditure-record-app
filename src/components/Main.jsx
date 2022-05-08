import React from 'react';

const Main = ({ children }) => {
  return (
    <main className="min-h-screen relative">
      <div className="w-full min-h-50vh h-50vh bg-blue z-10"></div>
      <div className="w-full min-h-50vh h-50vh bg-white z-10"></div>
      <div className="w-full min-h-screen absolute top-0 z-30 p-5 lg:flex lg:flex-col lg:justify-center lg:items-center">
        {children}
      </div>
    </main>
  );
};

export default Main;
