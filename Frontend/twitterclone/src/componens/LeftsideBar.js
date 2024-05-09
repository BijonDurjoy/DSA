import React from 'react'
import { FaHouse } from "react-icons/fa6";

const LeftsideBar = () => {
  return (
    <div>
      <div>
        <div>
          <img className='ml-2' width={"70px"} src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Logo_Twitter.png" alt="Tweeter logo" />
        </div>
        <div className='my-4'>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-100 hover:cursor-pointer rounded-full'>
            <div>
              <FaHouse size={"25px"}/>
            </div>
              <h1 className='font-semibold text-lg ml-2'>Home</h1>
          </div>
        </div>
        <div className='my-4'>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-100 hover:cursor-pointer rounded-full'>
            <div>
              <FaHouse size={"25px"}/>
            </div>
              <h1 className='font-semibold text-lg ml-2'>Explore</h1>
          </div>
        </div>
        <div className='my-4'>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-100 hover:cursor-pointer rounded-full'>
            <div>
              <FaHouse size={"25px"}/>
            </div>
              <h1 className='font-semibold text-lg ml-2'>Notifications</h1>
          </div>
        </div>
        <div className='my-4'>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-100 hover:cursor-pointer rounded-full'>
            <div>
              <FaHouse size={"25px"}/>
            </div>
              <h1 className='font-semibold text-lg ml-2'>Profile</h1>
          </div>
        </div>
        <div className='my-4'>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-100 hover:cursor-pointer rounded-full'>
            <div>
              <FaHouse size={"25px"}/>
            </div>
              <h1 className='font-semibold text-lg ml-2'>Bookmarks</h1>
          </div>
        </div>
        <div className='my-4'>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-100 hover:cursor-pointer rounded-full'>
            <div>
              <FaHouse size={"25px"}/>
            </div>
              <h1 className='font-semibold text-lg ml-2'>Log Out</h1>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LeftsideBar
