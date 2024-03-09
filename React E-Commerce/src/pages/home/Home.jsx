import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import HeroSecton from '../../components/heroSection/HeroSecton'
import Filter from '../../components/filter/Filter'


const Home = () => {

  
  return (
    <Layout>
     <HeroSecton />
     <Filter />
    </Layout>
  )
}

export default Home