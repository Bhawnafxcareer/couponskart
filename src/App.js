import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import ScrollToTop from "react-scroll-to-top";
import AllProductPage from "./pages/AllProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProfilePage from "./pages/ProfilePage";
import CartPage from "./pages/CartPage";
import CartPersonalPage from "./pages/CartPersonalPage";
import CartPaymentPage from "./pages/CartPaymentPage";
import CartThankYouPage from "./pages/CartThankYouPage";
import DashboardPage from "./pages/DashboardPage";
import DashboardProfilePage from "./pages/DashboardProfilePage";
import SettingPage from "./pages/SettingPage";
import OrdersPage from "./pages/OrdersPage";
import StatementPage from "./pages/StatementPage";
import EarningPage from "./pages/EarningPage";
import ReviewPage from "./pages/ReviewPage";
import DownloadPage from "./pages/DownloadPage";
import RefundPage from "./pages/RefundPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
// import BlogDetailsSidebarPage from "./pages/BlogDetailsSidebarPage";
import ContactPage from "./pages/ContactPage";
import About from "./pages/About";
import BecomeSeller from "./pages/BecomeSeller";
import './index.css';
import ProductManagementPage from "./pages/ProductManagementPage";
import EditProduct from "./components/EditProduct";



function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <ScrollToTop smooth color="#A847F0" />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<About />} />
       
        <Route exact path="/all-product" element={<AllProductPage />} />
        <Route exact path="/product-details" element={<ProductDetailsPage />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/cart-personal" element={<CartPersonalPage />} />
        <Route exact path="/cart-payment" element={<CartPaymentPage />} />
        <Route exact path="/cart-thank-you" element={<CartThankYouPage />} />
        <Route exact path="/dashboard" element={<DashboardPage />} />
        <Route exact path="/dashboard-profile" element={<DashboardProfilePage />} />   
        <Route exact path="/setting" element={<SettingPage />} />
        <Route exact path="/statement" element={<StatementPage />} />
        <Route exact path="/earning" element={<EarningPage />} />
        <Route exact path="/review" element={<ReviewPage />} />
        <Route exact path="/download" element={<DownloadPage />} />
        <Route exact path="/refund" element={<RefundPage />} />
        <Route exact path="/blog" element={<BlogPage />} />
        <Route exact path="/blog-details" element={<BlogDetailsPage />} />
        {/* <Route exact path="/blog-details-sidebar" element={<BlogDetailsSidebarPage />} /> */}
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/orders" element={<OrdersPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/become-a-seller" element={<BecomeSeller />} />
        <Route exact path="/product-management" element={<ProductManagementPage />} />
        <Route exact path="/edit-product/:id" element={<EditProduct />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
