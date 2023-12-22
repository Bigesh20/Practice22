import Categories from '../categories/categories.component'
import image1 from '../images/img1.jpg'
import image2 from '../images/img2.jpg'
import image3 from '../images/img3.jpg'
import image4 from '../images/img4.jpg'
import image5 from '../images/img5.jpg'


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
    title: 'Mens apparels',
    imgUrl: image4
  },
  {
    id: 5,
    title: 'Womens',
    imgUrl: image5
  },
]
const Home = () => {

    return(
<div>
<Categories categories={categories} />
</div>

    )


};

export default Home;