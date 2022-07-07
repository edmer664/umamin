import React from 'react';
import { Navbar } from './Navbar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='mx-auto w-[90%] max-w-screen-lg xl:w-full'>
      <Navbar />
      {children}
    </main>
  );
};
