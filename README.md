# BC Ecom Product Page

## Components
- ProductDetail: A 2 column Grid layout that wraps the and controls the flow of the page.
  - ProductGellery
    - Thumbnails
    - Slides
  - ProductInfo:
    - ColorSelector
    - Sizes: Shows a Grid of available shoe sizes
    - Modal(not built)
      - AtheleticSizeModal(not built)
  ### Reusable Components
    - Button
    - DropDown
      - DropDown Options
        - DropDownItems 
    
    


## API Endpoints
Get: `/product/:product_id`
returns
```{
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
```


Get: `/sizes/:code`
  returns
  ```
  const internationalSizes = {
  us: [7, 8, 9, 10, 11, 12, 13],
  uk: [6, 7, 8, 9, 10, 11, 12],
  eu: [40, 41, 42, 43, 44, 45, 46],
  athletics: [6.5, 7.0, 7.5, 8.0, 8.5, 9, 9.5, 10, 10.5, 11.0, 11.5, 12.0, 12.5, 13.0, 13.5]
}
```

## Setup

To get the app running on a local machine, run the following commands:

- `git clone git@github.com:freefony/bc_ecom_product_page.git`
- `cd bc_ecom_product_page`
- `yarn`
- `yarn start`

These should install the application, install the its dependencies and run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

run  `yarn test` to launch the test runner in the interactive watch mode.\


run `yarn build` to builds the app for production to the `build` folder.\

