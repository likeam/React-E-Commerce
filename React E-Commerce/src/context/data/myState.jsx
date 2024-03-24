import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import { toast } from "react-toastify";

function MyState(props) {
  const [mode, setMode] = useState('light');

  const [loading, setLoading] = useState(false);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
    }
  };

  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const addProcuct = async () => {
    if (
      products.title == null ||
      products.price == null ||
      products.imageUrl == null ||
      products.category == null ||
      products.description == null
    ) {
      return toast.error("Please fill all fields");
    }
    const poductRef = collection(fireDB, "products");
    setLoading(true);
    try {
      await addDoc(poductRef, products);
      toast.success("Product Add Successfully");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 800);
      gerProductData();
      closeModal();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setProducts("");
  };

  const [product, setProduct] = useState([])

  const getProductData = async () => {
    setLoading(true);

    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productsArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  

  const editHandle = (item) => {
    setProducts(item);
  };

  const updateProduct = async (item) => {
    setLoading(true);

    try {
      await setDoc(doc(fireDB, "products", products.id), products);
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 800);
      toast.success("Product Updated Sucessfuly");
      gerProductData();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    setProducts("");
  };

  const deleteProduct = async (item) => {
    try {
      setLoading(true);
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success("Product Deleted Sucessfully");
      setLoading(false);
      getProductData();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const [order, setOrder] = useState([]);

  const getOrderData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "orders"))
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
        setLoading(false)
      });
      setOrder(ordersArray);
      console.log(ordersArray)
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  const [searchkey, setSearchkey] = useState('')
  const [filterType, setFilterType] = useState('')
  const [filterPrice, setFilterPrice] = useState('')

  useEffect(() => {
    getProductData();
    getOrderData();
  }, []);


  return (
    <MyContext.Provider
      value={{
        mode,
        toggleMode,
        loading,
        setLoading,
        products,
        setProducts,
        addProcuct,
        product,
        editHandle,
        updateProduct,
        deleteProduct,
        order,
        searchkey,
        setSearchkey,
        filterType,
        setFilterType,
        filterPrice, 
        setFilterPrice
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
