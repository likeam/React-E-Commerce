import React, { useContext, useEffect } from "react";
import MyContext from "../../context/data/MyContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";

const ProductCard = () => {
  const context = useContext(MyContext);

  const { mode, product } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart)
  

  const addCart = (product) => {
    dispatch(addToCart(product))
    toast.success("Added to Cart")
  }

  useEffect(() =>{
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])

  return (
    <div>
      <section className="text-gray-800 body-font">
        <div className="container px-5 py-8 mx-auto md:py-16">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-10">
            <h1
              class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Our Latest Collection
            </h1>
            <div class="h-1 w-20 bg-pink-600 rounded"></div>
          </div>

          <div className="flex flex-wrap -m-4">
            {product.map((item, index) => {
              const {title, price, description, imageUrl} = item;
              return (
                <div key={index} className="p-4 md:w-1/4 drop-shadow-lg ">
                  <div
                    className="h-full overflow-hidden transition-shadow duration-300 ease-in-out border-2 border-gray-400 hover:shadow-gray-100 hover:shadow-2xl border-opacity-60 rounded-2xl"
                    style={{
                      backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                      color: mode === "dark" ? "white" : "",
                    }}
                  >
                    <div className="flex justify-center cursor-pointer">
                      <img
                        className="w-full p-2 duration-300 ease-in-out rounded-2xl h-80 hover:scale-110 transition-scale-110"
                        src={imageUrl}
                        alt="blog"
                      />
                    </div>
                    <div className="p-5 border-t-2">
                      <h2
                        className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        E-Punjab
                      </h2>
                      <h1
                        className="mb-3 text-lg font-medium text-gray-900 title-font"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        {title}
                      </h1>
                      {/* <p className="mb-3 leading-relaxed">{item.description.}</p> */}
                      <p
                        className="mb-3 leading-relaxed"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Rs. {price}
                      </p>
                      <div className="flex justify-center ">
                        <button
                        onClick={() => addCart(item)}
                          type="button"
                          className="w-full py-2 text-sm font-medium text-white bg-pink-600 rounded-lg focus:outline-none hover:bg-pink-700 focus:ring-4 focus:ring-purple-300"
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCard;
