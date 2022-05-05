import { createContext } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {

  const products = [
    {
      id: 1,
      "product-ratingsContainer": 4.3,
      "product-ratingsCount": "23.1k",
      "product-separator": "|",
      "product-base href": "https://www.myntra.com/shirts/roadster/roadster-men-black--grey-checked-casual-sustainable-shirt/1376577/buy",
      "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/4/18/d335c205-fb51-4e31-b709-b9475a3091c11650284973257RoadsterMenBlackGreyCheckedCasualSustainableShirt1.jpg",
      "name": "Roadster",
      "description": "Special Edition",
      "product-sizeNoInventoryPresent": "38,",
      "product-sizeNoInventoryPresent 2": "40,",
      "product-sizeNoInventoryPresent 3": "42,",
      "product-sizeNoInventoryPresent 4": "44,",
      "product-sizeNoInventoryPresent 5": "46,",
      "product-sizeNoInventoryPresent 6": 48,
      "product-discountedPrice": "Rs. 674",
      "price": "Rs. 1499",
      "product-discountPercentage": "(55% OFF)",
      "product-sizeButton": 38,
      "product-sizeButton 2": 40,
      "product-sizeButton 3": 42,
      "product-sizeButton 4": 44,
      "product-sizeButton 5": "",
      "quantity": 1,
    },
    {
      id: 2,
      "product-ratingsContainer": 4.2,
      "product-ratingsCount": "1.2k",
      "product-separator": "|",
      "product-base href": "https://www.myntra.com/shirts/herenow/herenow-men-grey-slim-fit-denim-casual-shirt/9260157/buy",
      "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/9260157/2019/6/1/7e59185c-0a70-4c35-88f4-314a3e8610e11559376771551-HERENOW-Men-Shirts-5171559376770146-1.jpg",
      "name": "Nautica",
      "description": "Special Edition",
      "product-sizeNoInventoryPresent": "38,",
      "product-sizeNoInventoryPresent 2": "40,",
      "product-sizeNoInventoryPresent 3": "42,",
      "product-sizeNoInventoryPresent 4": "44,",
      "product-sizeNoInventoryPresent 5": 46,
      "product-sizeNoInventoryPresent 6": "",
      "product-discountedPrice": "Rs. 799",
      "price": "Rs. 2099",
      "product-discountPercentage": "(Rs. 1300 OFF)",
      "product-sizeButton": 38,
      "product-sizeButton 2": 40,
      "product-sizeButton 3": 42,
      "product-sizeButton 4": 44,
      "product-sizeButton 5": 46,
      "quantity": 1,
    },
    {
      id: 3,
      "product-ratingsContainer": 4.2,
      "product-ratingsCount": "4.4k",
      "product-separator": "|",
      "product-base href": "https://www.myntra.com/shirts/highlander/highlander-men-white-slim-fit-casual-shirt/2050688/buy",
      "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2050688/2018/2/5/11517823120338-HIGHLANDER-Men-White-Slim-Fit-Solid-Casual-Shirt-5911517823120124-1.jpg",
      "name": "HIGHLANDER",
      "description": "Special Edition",
      "product-sizeNoInventoryPresent": "39,",
      "product-sizeNoInventoryPresent 2": "40,",
      "product-sizeNoInventoryPresent 3": "42,",
      "product-sizeNoInventoryPresent 4": 44,
      "product-sizeNoInventoryPresent 5": "",
      "product-sizeNoInventoryPresent 6": "",
      "product-discountedPrice": "Rs. 571",
      "price": "Rs. 1099",
      "product-discountPercentage": "(48% OFF)",
      "product-sizeButton": 39,
      "product-sizeButton 2": 40,
      "product-sizeButton 3": 42,
      "product-sizeButton 4": 44,
      "product-sizeButton 5": "",
      "quantity": 1,
    },
    {
      id: 4,
      "product-ratingsContainer": 4,
      "product-ratingsCount": "21.2k",
      "product-separator": "|",
      "product-base href": "https://www.myntra.com/shirts/roadster/roadster-men-blue-printed-casual-sustainable-shirt/1364628/buy",
      "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
      "name": "Roadster",
      "description": "Special Edition",
      "product-sizeNoInventoryPresent": "S,",
      "product-sizeNoInventoryPresent 2": "M,",
      "product-sizeNoInventoryPresent 3": "L,",
      "product-sizeNoInventoryPresent 4": "XL,",
      "product-sizeNoInventoryPresent 5": "XXL,",
      "product-sizeNoInventoryPresent 6": "3XL,",
      "product-discountedPrice": "Rs. 704",
      "price": "Rs. 1499",
      "product-discountPercentage": "(53% OFF)",
      "product-sizeButton": "S",
      "product-sizeButton 2": "M",
      "product-sizeButton 3": "L",
      "product-sizeButton 4": "XL",
      "product-sizeButton 5": "",
      "quantity": 1,
    },
    {
      id: 5,
      "product-ratingsContainer": 4.1,
      "product-ratingsCount": "10k",
      "product-separator": "|",
      "product-base href": "https://www.myntra.com/shirts/dennis-lingo/dennis-lingo-men-pink-slim-fit-casual-shirt/7488102/buy",
      "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg",
      "name": "Lingo",
      "description": "Special Edition",
      "product-sizeNoInventoryPresent": "38,",
      "product-sizeNoInventoryPresent 2": "40,",
      "product-sizeNoInventoryPresent 3": "42,",
      "product-sizeNoInventoryPresent 4": "44,",
      "product-sizeNoInventoryPresent 5": 46,
      "product-sizeNoInventoryPresent 6": "",
      "product-discountedPrice": "Rs. 684",
      "price": "Rs. 1849",
      "product-discountPercentage": "(63% OFF)",
      "product-sizeButton": 38,
      "product-sizeButton 2": 40,
      "product-sizeButton 3": 42,
      "product-sizeButton 4": 44,
      "product-sizeButton 5": 46,
      "quantity": 1,
    },
    {
      id: 6,
      "product-ratingsContainer": 4.3,
      "product-ratingsCount": "4.2k",
      "product-separator": "|",
      "product-base href": "https://www.myntra.com/shirts/highlander/highlander-men-white--blue-slim-fit-printed-casual-shirt/11780956/buy",
      "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11780956/2020/4/3/f724f764-2aae-4918-ba70-6a20335f90451585905028495HIGHLANDERMenWhiteBlueSlimFitPrintedCasualShirt1.jpg",
      "name": "HIGHLANDER",
      "description": "Special Edition",
      "product-sizeNoInventoryPresent": "39,",
      "product-sizeNoInventoryPresent 2": "40,",
      "product-sizeNoInventoryPresent 3": "42,",
      "product-sizeNoInventoryPresent 4": 44,
      "product-sizeNoInventoryPresent 5": "",
      "product-sizeNoInventoryPresent 6": "",
      "product-discountedPrice": "Rs. 545",
      "price": "Rs. 1049",
      "product-discountPercentage": "(48% OFF)",
      "product-sizeButton": 39,
      "product-sizeButton 2": 40,
      "product-sizeButton 3": 42,
      "product-sizeButton 4": 44,
      "product-sizeButton 5": "",
      "quantity": 1,
    },
    {
      id: 7,
      "product-ratingsContainer": 4.4,
      "product-ratingsCount": 18,
      "product-separator": "|",
      "product-base href": "https://www.myntra.com/shirts/blackberrys/blackberrys-men-yellow-slim-fit-casual-shirt/16693224/buy",
      "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16693224/2022/3/8/b85060f0-61c8-4201-91e8-eaad5d522c591646740991226-Blackberrys-Men-Shirts-5981646740990718-1.jpg",
      "name": "Blackberrys",
      "description": "Special Edition",
      "product-sizeNoInventoryPresent": "38,",
      "product-sizeNoInventoryPresent 2": "39,",
      "product-sizeNoInventoryPresent 3": "40,",
      "product-sizeNoInventoryPresent 4": "42,",
      "product-sizeNoInventoryPresent 5": "44,",
      "product-sizeNoInventoryPresent 6": 46,
      "product-discountedPrice": "",
      "price": "Rs 1520",
      "product-discountPercentage": "",
      "product-sizeButton": 39,
      "product-sizeButton 2": 40,
      "product-sizeButton 3": 42,
      "product-sizeButton 4": 44,
      "product-sizeButton 5": 46,
      "quantity": 1,
    },
    {
      id: 8,
      "product-ratingsContainer": 4.6,
      "product-ratingsCount": 31,
      "product-separator": "|",
      "product-base href": "https://www.myntra.com/shirts/nautica/nautica-men-grey--white-classic-fit-checked-casual-shirt/15353796/buy",
      "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/15353796/2021/10/28/fddb48f8-b822-4aea-a7eb-fec56cdb33991635400819175-Nautica-Men-Shirts-7201635400818464-1.jpg",
      "name": "Nautica",
      "description": "Special Edition",
      "product-sizeNoInventoryPresent": "38,",
      "product-sizeNoInventoryPresent 2": "40,",
      "product-sizeNoInventoryPresent 3": "42,",
      "product-sizeNoInventoryPresent 4": "44,",
      "product-sizeNoInventoryPresent 5": 46,
      "product-sizeNoInventoryPresent 6": "",
      "product-discountedPrice": "Rs. 2529",
      "price": "Rs. 4599",
      "product-discountPercentage": "(45% OFF)",
      "product-sizeButton": 38,
      "product-sizeButton 2": 40,
      "product-sizeButton 3": 42,
      "product-sizeButton 4": 44,
      "product-sizeButton 5": 46,
      "quantity": 1,
    },
    {
      id: 9,
      "product-ratingsContainer": 4.4,
      "product-ratingsCount": "8.3k",
      "product-separator": "|",
      "product-base href": "https://www.myntra.com/shirts/roadster/roadster-men-maroon--navy-blue-checked-pure-cotton-casual-sustainable-shirt/9951411/buy",
      "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/9951411/2019/8/5/fe1322b7-9e53-4b6e-8423-0a4f5a9e8b4b1565006161882-Roadster-Men-Shirts-8701565006159466-1.jpg",
      "name": "Roadster",
      "description": "Special Edition",
      "product-sizeNoInventoryPresent": "38,",
      "product-sizeNoInventoryPresent 2": "40,",
      "product-sizeNoInventoryPresent 3": "42,",
      "product-sizeNoInventoryPresent 4": "44,",
      "product-sizeNoInventoryPresent 5": "46,",
      "product-sizeNoInventoryPresent 6": 48,
      "product-discountedPrice": "Rs. 824",
      "price": "Rs. 1499",
      "product-discountPercentage": "(45% OFF)",
      "product-sizeButton": 38,
      "product-sizeButton 2": 40,
      "product-sizeButton 3": 42,
      "product-sizeButton 4": 44,
      "product-sizeButton 5": "",
      "quantity": 1,
    },
    {
      id: 10,
      "product-ratingsContainer": 4.2,
      "product-ratingsCount": "5.8k",
      "product-separator": "|",
      "product-base href": "https://www.myntra.com/shirts/dennis-lingo/dennis-lingo-men-olive-green-slim-fit-casual-shirt/7488103/buy",
      "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/7488103/2019/8/22/acfba45f-8f9c-4b97-b5bc-a909418bdf4c1566454100620-Dennis-Lingo-Men-Green-Slim-Fit-Solid-Casual-Shirt-358156645-3.jpg",
      "name": "WROGN",
      "description": "Special Edition",
      "product-sizeNoInventoryPresent": "38,",
      "product-sizeNoInventoryPresent 2": "40,",
      "product-sizeNoInventoryPresent 3": "42,",
      "product-sizeNoInventoryPresent 4": "44,",
      "product-sizeNoInventoryPresent 5": 46,
      "product-sizeNoInventoryPresent 6": "",
      "product-discountedPrice": "Rs. 684",
      "price": "Rs. 1849",
      "product-discountPercentage": "(63% OFF)",
      "product-sizeButton": 38,
      "product-sizeButton 2": 40,
      "product-sizeButton 3": 42,
      "product-sizeButton 4": 44,
      "product-sizeButton 5": 46,
      "quantity": 1,
    },
    {
      id: 11,
      "product-ratingsContainer": 4.1,
      "product-ratingsCount": "5.1k",
      "product-separator": "|",
      "product-base href": "https://www.myntra.com/shirts/wrogn/wrogn-navy-blue-slim-fit-checked-casual-shirt/1729391/buy",
      "image": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1729391/2019/8/28/a9d4a7aa-af7e-4a37-a9d4-a94dc8c057e81566992341974-WROGN-Navy-Blue-Slim-Fit-Checked-Casual-Shirt-52415669923403-1.jpg",
      "name": "WROGN",
      "description": "Special Edition",
      "product-sizeNoInventoryPresent": "39,",
      "product-sizeNoInventoryPresent 2": "40,",
      "product-sizeNoInventoryPresent 3": "42,",
      "product-sizeNoInventoryPresent 4": "44,",
      "product-sizeNoInventoryPresent 5": 46,
      "product-sizeNoInventoryPresent 6": "",
      "product-discountedPrice": "Rs. 1374",
      "price": "Rs. 2499",
      "product-discountPercentage": "(45% OFF)",
      "product-sizeButton": 39,
      "product-sizeButton 2": 40,
      "product-sizeButton 3": 42,
      "product-sizeButton 4": 44,
      "product-sizeButton 5": 46,
      "quantity": 1,
    },
    {
      id: 12,
      "product-ratingsContainer": 4.2,
      "product-ratingsCount": "8.6k",
      "product-separator": "|",
      "product-base href": "https://www.myntra.com/shirts/highlander/highlander-men-white--sea-green-slim-fit-striped-casual-shirt/2347551/buy",
      "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/1376577/2022/4/18/aae765ac-5610-4614-9839-102ad40fe5ab1650284973267RoadsterMenBlackGreyCheckedCasualSustainableShirt15.jpg",
      "name": "HIGHLANDER",
      "description": "Special Edition",
      "product-sizeNoInventoryPresent": "39,",
      "product-sizeNoInventoryPresent 2": "40,",
      "product-sizeNoInventoryPresent 3": "42,",
      "product-sizeNoInventoryPresent 4": 44,
      "product-sizeNoInventoryPresent 5": "",
      "product-sizeNoInventoryPresent 6": "",
      "product-discountedPrice": "Rs. 597",
      "price": "Rs. 1149",
      "product-discountPercentage": "(48% OFF)",
      "product-sizeButton": 39,
      "product-sizeButton 2": 40,
      "product-sizeButton 3": 42,
      "product-sizeButton 4": 44,
      "product-sizeButton 5": "",
      "quantity": 1,
    },
  ]

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  )
}
