import Categories from './component/categories/categories.component';
import image1 from './component/images/img1.jpg'
import image2 from './component/images/img2.jpg'
import image3 from './component/images/img3.jpg'
import image4 from './component/images/img4.jpg'
import image5 from './component/images/img5.jpg'




const categories = [
  {
    id: 1,
    title: 'Snow White',
    imgUrl: image1
  },
  {
    id: 2,
    title: 'Mera wala sneaker',
    imgUrl: image2
  },
  {
    id: 3,
    title: 'Jackets',
    imgUrl: image3
  },
  {
    id: 4,
    title: 'Mens',
    imgUrl: image4
  },
  {
    id: 5,
    title: 'Womens',
    imgUrl: image5
  },
]

const App = () => {
  return(
    
    <Categories categories={categories} />

  )
}

export default App;
