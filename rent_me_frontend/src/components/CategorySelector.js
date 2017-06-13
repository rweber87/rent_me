import React from 'react'
import CategoryField from './CategoryField'
import categories from '../categories'
import Filter from './Filter'



const CategorySelector = (props) => {

  const categoryFields = categories.map(
    (category, i) => {

      return (
        <div className="col s4 offset-3" key={i}>
          <div className="checkbox" >
          
            <CategoryField 
              handleChange={props.handleChange}
              handleCheckboxChange={props.handleChange}
              label={category}
              type='checkbox'
              key={i}
              /> 
          
          </div>
        </div>
      )
    }
  )


  return (
      
        <div id='category-selector' className="col s5 card">  
        <h4 id='filter-title'>Filter By: </h4>
                { categoryFields }
            <Filter filter={props.filter} onChange={ props.onChange }/>
        </div>
      
  )
}

export default CategorySelector