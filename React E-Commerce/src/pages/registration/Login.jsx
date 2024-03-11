import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../context/data/MyContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/FirebaseConfig";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const navigate = useNavigate();

  const context = useContext(MyContext);
  const { loading, setLoading } = context;

  const login = async () => {

    setLoading(true);

    try {
      
      const result = await signInWithEmailAndPassword(auth, email, password)
      localStorage.setItem('user', JSON.stringify(result))
      toast.success("Login Sucessfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate('/')
      
      setLoading(false);

    } catch (error) {
      toast.error('Sigin Failed', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoading(false)
    }

  }
 

  return (
    <div>
      <div className="flex items-center justify-center h-screen ">
      {loading && <Loader />}
        <div className="px-10 py-10 bg-gray-800 rounded-xl">
          <div className="">
            <h1 className="mb-4 text-xl font-bold text-center text-white">
              Login
            </h1>
          </div>
          <div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value) }
              type="email"
              name="email"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-center mb-3 ">
            <button
              onClick={login}
             className="w-full px-2 py-2 font-bold text-black bg-yellow-500 rounded-lg ">
              Login
            </button>
          </div>
          <div>
            <h2 className="text-white">
              Don't have an account{" "}
              <Link className="font-bold text-yellow-500 " to={"/signup"}>
                Signup
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
