import React from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
const ProductCard = (props) => {
  return (
    <Card className='bg-white flex flex-col hover:shadow-lg'>
      <div className='w-full h-[220px] flex justify-center items-center object-cover  border-b-2'>
        <img
          src={props.product.image}
          className='w-full h-full scale-75 transition-all duration-100 hover:scale-95'
          alt=''
        />
      </div>
      <span className='my-2 text-lg font-semibold text-gray-600'>{props.product.title}</span>
      <div className='mt-1 flex flex-row items-center '>
        <Button
          onClick={(e) => props.addNewCart(props.product)}
          className='border-2 border-sky-400 hover:bg-sky-500 hover:text-white text-gray-700 mr-3 text-sm'>
          Add to Cart
        </Button>
        <span className='text-xl font-sans text-purple-700 font-bold'>${props.product.price}</span>
      </div>
    </Card>
  )
}

export default ProductCard
