import React from 'react'

const CartTable = () => {
  return (
    <div className='w-[1100px] p-5 border-2'>
      <table className=' w-full'>
        <tr>
          <th>SNo</th>
          <th>Product</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Action</th>
        </tr>

        <tr>
          <td>1</td>
          <td>Sirjan tamang</td>
          <td>4</td>
          <td>delete</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Sirjan tamang</td>
          <td>4</td>
          <td>delete</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Sirjan tamang</td>
          <td>4</td>
          <td>delete</td>
        </tr>
      </table>
    </div>
  )
}

export default CartTable
