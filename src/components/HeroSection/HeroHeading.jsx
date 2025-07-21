import React from 'react'

function HeroHeading() {
  return (
    <div className='flex flex-col gap-10 text-center items-center'>
      <h1 className='text-5xl font-bold text-secondaryText'>The simplest way to create forms</h1>
      <p className='text-secondaryText w-[500px] text-xl font-light'>Say goodbye to boring forms. Meet Tally - teh free, intuitive form builder you've been looking for.</p>
      <button className="bg-backgroundBlack text-whiteText w-80 py-4 rounded-xl font-extralight">Create Free Space</button>  
    </div>
  )
}

export default HeroHeading