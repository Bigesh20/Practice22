import './category.styles.scss'

const Category = ({category}) => {
    const {id, imgUrl, title} = category;
    return(
        <div key={id}  className='category-container'>
        <div className='background-image' style= {{backgroundImage: `url(${imgUrl})`}}>
        <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
        </div>
        </div>
        </div>
    );
 
};

export default Category;