import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/nopage/NoPage";
import MyState from "./context/data/myState";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";

export default function App() {
  return (
    <MyState >
      <Router>
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/order" element= {<Order />} />
          <Route path="/cart" element= {<Cart />} />
          <Route path="/dashboard" element= {<Dashboard />} />
          <Route path="/nopage" element= {<NoPage />} />
          <Route path="/login" element= {<Login />} />
          <Route path="/signup" element= {<Signup />} />
        </Routes>
      </Router>
    </MyState>
  )
}