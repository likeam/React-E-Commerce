import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import HeroSecton from '../../components/heroSection/HeroSecton'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'


const Home = () => {

  
  return (
    <Layout>
     <HeroSecton />
     <Filter />
     <ProductCard />
    </Layout>
  )
}

export default Home