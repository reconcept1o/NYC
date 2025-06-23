import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Bileşenleri import et
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsappButton from "./pages/WhatsAppButton";

// Sayfaları lazy-loading ile import et
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const ProdandCert = lazy(() => import("./pages/ProandCert"));

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          <Suspense
            fallback={
              <div className="min-vh-100 d-flex align-items-center justify-content-center">
                Yükleniyor...
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/prodandcert" element={<ProdandCert />} />
              <Route
                path="*"
                element={
                  <div className="min-vh-100 d-flex align-items-center justify-content-center">
                    404 - Sayfa Bulunamadı
                  </div>
                }
              />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
      <WhatsappButton />
    </Router>
  );
}

export default App;
