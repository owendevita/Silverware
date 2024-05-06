import React, { useEffect } from 'react'
import MenuCreator from './MenuCreator'


const CategoryCreator = ({categories}) => {

    useEffect(() => {
        console.log("categoriestest: ", categories);
      }, []);

  return (
          <div className='menu-category'>
            <div className='menu-category-name'>{categories.category.name}</div>
            <MenuCreator items={categories.category.items}/>
          </div>
    
  )
}

export default CategoryCreator
