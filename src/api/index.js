const product = {
  sex: 'Men\'s',
  name: 'Capri Triple White',
  price: 268,
  currency: '$',
  color: 'Triple White',
  product_images: [
    'https://cdn.shopify.com/s/files/1/0646/1285/products/Capri-Triple-White-Lowtop-Men-Koio-1_1200x.progressive.png.jpg?v=1593118532',
    'https://cdn.shopify.com/s/files/1/0646/1285/products/Capri-Triple-White-Lowtop-Men-Koio-2_1200x.progressive.png.jpg?v=1593118532',
    'https://cdn.shopify.com/s/files/1/0646/1285/products/Holiday-PDPImages5_bd9c4fe4-92c3-453c-98f0-6cd2c0e52944_1200x.progressive.jpg?v=1612819002'
  ],
  colors: [
    'Nuvola',
    'Nero',
    'Bianco',
    'Castagna',
    'Mocha'
  ],
  sizes: [7, 8, 9, 10, 11, 12, 13],
  description: `Any look, any day. (Every day?) In buttery full-grain calf leather, the men’s Capri Triple White sneakers are the ultimate wardrobe cornerstone. The one that lets you do you. These White Capri shoes are so neutral they freshen and compliment just about anything. These sneakers let you reinvent the fashion wheel, or keep the white capri classic. Rather than canvas, these white low-top sneakers are made with real Italian leather for only the best men’s capri look and wearability. Keep these kicks  fresh or curiously banged up: your choice. 

  Snag yourself a pair before you go out of style.`
}

const internationalSizes = {
  us: [7, 8, 9, 10, 11, 12, 13],
  uk: [6, 7, 8, 9, 10, 11, 12],
  eu: [40, 41, 42, 43, 44, 45, 46],
  athletics: [6.5, 7.0, 7.5, 8.0, 8.5, 9, 9.5, 10, 10.5, 11.0, 11.5, 12.0, 12.5, 13.0, 13.5]
}
const getProduct = (id) => {
  return Promise.resolve(product)
}

const getInternationalSizes = (code) => {
  if (code && internationalSizes[code]) {
    return internationalSizes[code]
  }
  return internationalSizes
}

export { getProduct, getInternationalSizes }