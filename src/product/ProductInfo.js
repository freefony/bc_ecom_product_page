import * as React from 'react'
import { Button } from '../components/Button'
import { DropDown } from '../components/Dropdown'
import { Sizes } from '../components/Sizes'
import { ColorSelect } from './ColorSelect'

export const ProductInfo = ({ product }) => {
  const [selectedSize, setSeletectedSize] = React.useState(9)

  return <div className='product_options flex flex-col items-center gap-2 p-2'>
    <div className='font_gt-sectra-fine-book font-w-400'>
      {product.sex}
    </div>
    <div className='font_Plaak-36-Ney-Regular-205TF font-w-500 uppercase'>
      {product.name}
    </div>
    <span className='border p-2 text-gray-600 font-sm'>
      4 interest-free payments of $67.00. Klarna. Learn more
    </span>
    <div className='font_Plaak-36-Ney-Regular-205TF font-w-500 uppercase'>
      ${product.price}
    </div>

    <ColorSelect colors={product.colors} selectedColor={product.colors[0]} />
    <Sizes selectedSize={selectedSize} onSizeChange={setSeletectedSize} />
    
    <div className='text-center m-b-4 text-gray-600 font-sm'>
      <p>Wearing a half size? Size down for a perfect fit.</p>
      <a href='/'>International Sizing</a>
    </div>

    <DropDown className='border w-full p-2 text-center font-gray-600' />
    <Button className='p-4 w-full uppercase border-none font-w-bold bg-success'>ADD TO CART</Button>
    <Button className='p-4 w-full uppercase font-w-bold bg-white'>Try before you buy</Button>
  </div>
}