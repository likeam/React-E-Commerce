import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import HeroSecton from '../../components/heroSection/HeroSecton'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'

import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'


const Home = () => {

  const dispath = useDispatch();
 
  const cartItem = useSelector((state) => state.cart)


  console.log(cartItem);

  const addCart = () => {
    dispath(addToCart("Shirt"));
  }
  
  const deleteCart = () => {
    dispath(deleteFromCart("Shirt"))
  }

  return (
    <Layout>

        <div className="flex justify-center gap-5">
          <button className='p-5 bg-gray-300 ' onClick={()=> addCart()}>add</button>
          <button className='p-5 bg-gray-300 ' onClick={()=> deleteCart()}>del</button>
        </div>

     <HeroSecton />
     <Filter />
     <ProductCard />
     <Track />
     <Testimonial />
    </Layout>
  )
}

export default Home