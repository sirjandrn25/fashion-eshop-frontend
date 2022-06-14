import React from 'react'
import ListItem from './ListItem'
import FilterLink from './FilterLink'

const Category = () => {
  return (
    <div className='mb-7'>
      <div className='bg-gray-300 w-full py-3 px-5 flex flex-row justify-between items-center'>
        <span className='text-xl font-medium  text-gray-600'>Categories</span>
        <span className='font-bold'>V</span>
      </div>
      <ul className='w-full'>
        <FilterLink category={"Boy's T-shirt"}>
          <span>Boy's T-shirt</span>
          <span className='text-sm font-bold py-1 px-2 bg-gray-400 text-white rounded-full'>45</span>
        </FilterLink>
        <FilterLink category={'Girls Kurthi'}>
          <span>Girls Kurthi</span>
          <span className='text-sm font-bold py-1 px-2 bg-gray-400 text-white rounded-full'>45</span>
        </FilterLink>
        <FilterLink category={`Sport Shoes`}>
          <span>Sport Shoes</span>
          <span className='text-sm font-bold py-1 px-2 bg-gray-400 text-white rounded-full'>45</span>
        </FilterLink>
        <FilterLink category={`Boy's Pants`}>
          <span>Boy's Pants</span>
          <span className='text-sm font-bold py-1 px-2 bg-gray-400 text-white rounded-full'>45</span>
        </FilterLink>
        <FilterLink category={`Boy's Bags`}>
          <span>Boy's Bags</span>
          <span className='text-sm font-bold py-1 px-2 bg-gray-400 text-white rounded-full'>45</span>
        </FilterLink>
      </ul>
    </div>
  )
}

export default Category
