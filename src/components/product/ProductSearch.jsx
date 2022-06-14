import React from 'react'
import Card from '../UI/Card'
import Input from '../UI/Input'
import Button from '../UI/Button'

const ProductSearch = () => {
  return (
    <Card className='w-full mb-2 bg-white grid grid-cols-10 gap-1 items-center '>
      <Input type='text' className='col-span-6' placeholder='Enter search products by title' />

      <Button className='bg-sky-400 col-span-2 h-[40px] w-[120px]'>Search</Button>
      <span className='text-gray-600 text-xl font-semibold col-span-2 '>34 items found</span>
    </Card>
  )
}

export default ProductSearch
