import { ProductGellery } from './Gallery';
import { ProductInfo } from './product/ProductInfo'
import * as api from './api'
import { useEffect, useState } from 'react';

function ProductDetails () {
  const [product, setProduct] = useState()
  const productId = window.location.pathname.split('/').pop()

  useEffect(() => {
    api.getProduct(productId)
    .then(setProduct)
    .catch(err => console.log(err)) //Also tell users the product was not found
  }, [productId])

  if (!product) return <div>Loading...</div>

  return (
    <div className='App'>
      <div id='page_layout' className='gap-2'>
        <ProductGellery images={product.product_images} />
        <ProductInfo product={product} />
      </div>
    </div>
  );
}

export default ProductDetails;