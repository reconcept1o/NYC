import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Bileşenleri import et
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsappButton from "./pages/WhatsAppButton"; // <-- 1. ADIM: WhatsApp butonunu import et

// Sayfaları lazy-loading ile import et
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <Router>
      {/*
        Flexbox yapınız zaten çok iyi. Header, main ve Footer'ı kapsıyor.
        WhatsApp butonu 'position: fixed' olduğu için bu flex yapısının
        dışında veya içinde olması fark etmez. Temizlik açısından
        genellikle en dışta veya Footer'ın hemen yanında tutulur.
      */}
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          <Suspense
            fallback={
              <div className="min-vh-100 d-flex align-items-center justify-content-center">
                {/* Buraya daha şık bir spinner/loader bileşeni de koyabilirsiniz */}
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

      {/* 
        <-- 2. ADIM: WhatsApp butonunu buraya ekle.
        Ana <div>'in dışında olması, DOM'da daha temiz bir hiyerarşi sağlar
        ve flexbox düzeninden tamamen bağımsız çalışır. 
        Her sayfada sabit kalacaktır.
      */}
      <WhatsappButton />
    </Router>
  );
}

export default App;
