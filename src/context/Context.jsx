import { createContext } from 'react'
import faker from 'faker'
import { cartReducer } from './Reducer'
import { useReducer, useContext } from 'react'

const Cart = createContext()

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }))

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  })

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>
}

export default Context

export const CartState = () => {
  return useContext(Cart)
}
