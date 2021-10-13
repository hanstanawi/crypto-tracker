import React from 'react';

const Layout = ({ children }) => {
  return (
    <section className='h-screen max-h-screen w-full bg-gray-100 flex justify-center items-start'>
      {children}
    </section>
  );
};

export default Layout;
