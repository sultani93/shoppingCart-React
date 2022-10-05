import { CartState } from '../context/Context'
import SingleProducts from './SingleProducts'
import './styles.css'
import Filters from './Filters'

const Home = () => {
  const {
    state: { products },
  } = CartState()
  console.log(products)
  return (
    <div className='home'>
      <Filters />
      <div className='productContainer'>
        {products.map((prod) => {
          return <SingleProducts prod={prod} key={prod.id} />
        })}
      </div>
    </div>
  )
}

export default Home
