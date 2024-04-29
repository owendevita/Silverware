import React, { useEffect } from 'react'
import MenuCreator from './MenuCreator'


const CategoryCreator = ({categories}) => {

    useEffect(() => {
        console.log("categoriestest: ", categories);
      }, []);

  return (
          <div>
            <div>Category: {categories.category.name}</div>
            <MenuCreator items={categories.category.items}/>
          </div>
    
  )
}

export default CategoryCreator
