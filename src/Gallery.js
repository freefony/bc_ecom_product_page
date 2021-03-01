import * as React from 'react'

const Thumbnails = ({ images, selectedImg }) => {
  const thumbnails = images.map(src => <img src={src} alt=''  style={{maxWidth: 60}} />)
  return <div className='flex flex-col gap-2'>
    {thumbnails}
  </div>
}

const Slides = ({ images }) => {
  const slides = images.map(imgSrc => <img src={imgSrc} alt='' className='w-full' />)
  return <div className='flex flex-col gap-2'>
    {slides}
  </div>
}

export const ProductGellery = ({ images }) => {
  
  return <div className='flex gap-4 p-2'>
    <Thumbnails images={images} />
    <Slides images={images} />
  </div>
}