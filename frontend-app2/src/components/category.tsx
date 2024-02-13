import React from 'react'
import { CategoryContainer } from '../styles/category'
import FormalLogo from "../assets/images/hunters-race-MYbhN8KaaEc-unsplash.jpg"
import casualLogo from "../assets/images/logan-weaver-lgnwvr-Gi1rDqy9R40-unsplash.jpg"
import sportswear from "../assets/images/alexander-redl-d3bYmnZ0ank-unsplash.jpg"
import Fashionwear from "../assets/images/dom-hill-nimElTcTNyY-unsplash.jpg"
const Category = () => {
  return (
   <>
   <CategoryContainer>
    <div>tiyu</div>
    <img
                src={FormalLogo}
                alt="logo"
                style={{ width: "270px", height: "150px" }}
              />
   
              <img
                src={casualLogo}
                alt="logo"
                style={{ width: "270px", height: "150px" }}
              />
              <img
                src={sportswear}
                alt="logo"
                style={{ width: "270px", height: "150px" }}
              />
               <img
                src={Fashionwear}
                alt="logo"
                style={{ width: "270px", height: "150px" }}
              />
              <div>Ritu</div>
   </CategoryContainer>
   </>
  )
}

export default Category