import './categories.styles.scss'
import Category from '../category/category.component'

const Categories = ({categories}) => {
    return(
        <div className='categories-container'>
        {categories.map((category) => {
          return(
           <Category category={category} />
            
          )})}
        </div>
    )
}

export default Categories;