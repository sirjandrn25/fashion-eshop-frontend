import React from 'react'
import ListItem from './ListItem'

const Brand = () => {
  return (
    <div className='w-full'>
      <div className='bg-gray-300 w-full py-3 px-5 flex flex-row justify-between items-center'>
        <span className='text-xl font-medium  text-gray-600'>Brands</span>
        <span className='font-bold'>V</span>
      </div>
      <ul className='w-full'>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    </div>
  )
}

export default Brand
