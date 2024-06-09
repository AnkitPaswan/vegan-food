import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product/Product";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUp from "./pages/SignUpPage/SignUp";
import Cart from "./pages/Cart/Cart";
import ContactUs from "./pages/ContactPage/ContactUs";
import ProductList from "./pages/ProductList/ProductList";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import About from "./pages/AboutPage/About";
import Dashbord from "./pages/Dashbord/Dashbord";
import SuccessPage from "./pages/SuccessPage/SuccessPage";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  // console.log(user);
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate replace to="/" /> : <LoginPage />}
        />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        {/* <Route path="/admin" element={<Dashbord />} /> */}
        <Route path="/successpage" element={<SuccessPage />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
