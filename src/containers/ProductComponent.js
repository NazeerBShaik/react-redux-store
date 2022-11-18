import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css'

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((products) =>{
    const {id,title,image,price,category} = products;
    return(
      <div>
        <div className='product-cards'>
          <div className='product-card' key={id}>    
              <div className='product-title'>{title}</div>
              <img src={image} alt={title} />               
              <div className='product-category'>{category}</div>            
              <div className='product-price'>$ {price}</div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>{renderList}</>
  )
}

export default ProductComponent;
