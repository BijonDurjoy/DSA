import React from 'react'
import LeftsideBar from './LeftsideBar'
import Feed from './Feed'
import RightSideBar from './RightSideBar'

const Home = () => {
  return (
    <div className='flex justify-between w-[80%] mx-auto'>
      <LeftsideBar/>
      <Feed/>
      <RightSideBar/>
    </div>
  )
}

export default Home
