import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import HeroSecton from '../../components/heroSection/HeroSecton'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import Footer from '../../components/footer/Footer'


const Home = () => {


  
  return (
    <Layout>
     <HeroSecton />
     <Filter />
     <ProductCard />
     <Track />
     <Testimonial />
     <Footer />
    </Layout>
  )
}

export default Home