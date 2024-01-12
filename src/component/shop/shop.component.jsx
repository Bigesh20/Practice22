import CategoriesPreview from '../categories-preview/categories-preview.component';
import './shop.styles.scss'
import {Route, Routes} from 'react-router-dom';
import CategoryList from '../category-list/category-list.component';

const Shop =() => {

    
    return(
        <Routes>
        <Route index element= {<CategoriesPreview />} />
        <Route path=":category" element= {<CategoryList />} />
        </Routes>   
    )

};

export default Shop;