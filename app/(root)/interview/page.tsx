import React from 'react';
import Agent  from '@/components/Agent';

const Page = ( ) => {
  return (
  
    <>
    <h2>Interview Genaration</h2>

    <Agent userName="You" userId= "user1" type="generate" />
    </> 
  );
};

export default Page;