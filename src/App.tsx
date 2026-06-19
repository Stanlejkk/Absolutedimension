import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CartDrawer from "./components/CartDrawer";
import PageTransition from "./components/motion/PageTransition";
import ScrollProgress from "./components/motion/ScrollProgress";
import { ToastProvider } from "./components/motion/Toast";
import { FlyToCartProvider } from "./components/motion/FlyToCart";
import { ProductTransitionProvider } from "./components/motion/ProductTransition";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import CollectionsIndex from "./pages/CollectionsIndex";
import Collection from "./pages/Collection";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import SmartWardrobe from "./pages/SmartWardrobe";
import Source from "./pages/Source";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Delivery from "./pages/Delivery";
import Returns from "./pages/Returns";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import NewsletterConfirmed from "./pages/NewsletterConfirmed";
import NewsletterUnsubscribed from "./pages/NewsletterUnsubscribed";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import Orders from "./pages/Orders";
import AdminLayout from "./components/admin/AdminLayout";
import AdminOverview from "./pages/admin/Overview";
import AdminProducts from "./pages/admin/Products";
import AdminCollections from "./pages/admin/Collections";
import AdminOrders from "./pages/admin/Orders";
import AdminSubscribers from "./pages/admin/Subscribers";
import AdminCampaigns from "./pages/admin/Campaigns";
import AdminUsers from "./pages/admin/Users";
import NotFound from "./pages/NotFound";

export default function App() {
  const location = useLocation();

  return (
    <ToastProvider>
      <FlyToCartProvider>
        <ProductTransitionProvider>
          <div className="min-h-screen bg-bone text-ink">
            <ScrollToTop />
            <ScrollProgress />
            <Navbar />
            <main>
              <AnimatePresence mode="wait" initial={false}>
                <PageTransition key={location.pathname}>
                  <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/collections" element={<CollectionsIndex />} />
                    <Route path="/collections/:slug" element={<Collection />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/smart-wardrobe" element={<SmartWardrobe />} />
                    <Route path="/source" element={<Source />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/delivery" element={<Delivery />} />
                    <Route path="/returns" element={<Returns />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/checkout/success" element={<CheckoutSuccess />} />
                    <Route path="/newsletter/confirmed" element={<NewsletterConfirmed />} />
                    <Route path="/newsletter/unsubscribed" element={<NewsletterUnsubscribed />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/account/orders" element={<Orders />} />
                    <Route path="/admin" element={<AdminLayout />}>
                      <Route index element={<AdminOverview />} />
                      <Route path="products" element={<AdminProducts />} />
                      <Route path="collections" element={<AdminCollections />} />
                      <Route path="orders" element={<AdminOrders />} />
                      <Route path="orders/:orderId" element={<AdminOrders />} />
                      <Route path="subscribers" element={<AdminSubscribers />} />
                      <Route path="campaigns" element={<AdminCampaigns />} />
                      <Route path="users" element={<AdminUsers />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </PageTransition>
              </AnimatePresence>
            </main>
            <Footer />
            <CartDrawer />
          </div>
        </ProductTransitionProvider>
      </FlyToCartProvider>
    </ToastProvider>
  );
}
