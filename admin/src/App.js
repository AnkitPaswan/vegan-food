import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductLists from "./pages/ProductLists/ProductLists";
import Addproduct from "./pages/Addproduct/Addproduct";
import Customers from "./pages/Customers/Customers";
import Orders from "./pages/Orders/Orders";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productList" element={<ProductLists />} />
        <Route path="/addProduct" element={<Addproduct />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customerList" element={<Customers />} />
      </Routes>
    </Router>
  );
}

export default App;
