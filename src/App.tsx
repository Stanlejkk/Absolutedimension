import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CartDrawer from "./components/CartDrawer";
import PageTransition from "./components/motion/PageTransition";
import ScrollProgress from "./components/motion/ScrollProgress";
import EditorialCursor from "./components/motion/EditorialCursor";
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
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import Admin from "./pages/Admin";
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
            <EditorialCursor />
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
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/admin" element={<Admin />} />
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
