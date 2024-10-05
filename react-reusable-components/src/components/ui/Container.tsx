import React from 'react';

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className='h-full w-full max-w-[1250px] mx-auto'>{children}</div>;
};

export default Container;
