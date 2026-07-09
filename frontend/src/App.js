import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Navigation from "@/components/site/Navigation";
import Footer from "@/components/site/Footer";
import FloatingCTAs from "@/components/site/FloatingCTAs";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import SOS from "@/pages/SOS";
import Gallery from "@/pages/Gallery";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import BookInspection from "@/pages/BookInspection";
import Blog from "@/pages/Blog";
import BlogDetail from "@/pages/BlogDetail";
import ScrollToTop from "@/components/site/ScrollToTop";

function App() {
    return (
        <div className="App min-h-screen bg-brand-black text-white grain-overlay">
            <BrowserRouter>
                <ScrollToTop />
                <Navigation />
                <main className="relative z-10">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route
                            path="/services/:slug"
                            element={<ServiceDetail />}
                        />
                        <Route path="/sos" element={<SOS />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/book" element={<BookInspection />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:slug" element={<BlogDetail />} />
                    </Routes>
                </main>
                <Footer />
                <FloatingCTAs />
                <Toaster
                    theme="dark"
                    position="top-center"
                    toastOptions={{
                        style: {
                            background: "rgba(10,10,10,0.9)",
                            border: "1px solid rgba(255,213,0,0.3)",
                            color: "#fff",
                        },
                    }}
                />
            </BrowserRouter>
        </div>
    );
}

export default App;
