import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import HeroSecton from "../../components/heroSection/HeroSecton";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";



const Home = () => {
  return (
    <Layout>
      <HeroSecton />
      <Filter />
      <ProductCard />
      <Track />
      <Testimonial />
    </Layout>
  );
};

export default Home;
