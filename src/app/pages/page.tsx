import React from 'react'
import Pages from './pages';
import Summery from './summery';
import Summary from './summery';

const Page = () => {
  return (
    
    <div>
      
      <div className="min-h-screen flex items-left mr-24 pt-32 justify-center o">
      <Pages />
      <Summary />
    </div>
  </div>
  )
}

export default Page;
