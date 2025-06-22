import React, { useEffect } from "react";

// Resim listesi aynı kalıyor
const galleryImages = [
  { id: 1, src: "/assets/2.jpg", alt: "Stunning blonde balayage" },
  { id: 2, src: "/assets/3.jpg", alt: "Elegant hair styling" },
  { id: 3, src: "/assets/4.jpg", alt: "Professional hair coloring" },
  { id: 4, src: "/assets/5.jpg", alt: "Modern haircut for women" },
  { id: 5, src: "/assets/6.jpg", alt: "Beautiful hair transformation" },
  { id: 6, src: "/assets/7.jpg", alt: "Chic and stylish hair" },
  { id: 7, src: "/assets/8.jpg", alt: "Long wavy hair style" },
  { id: 8, src: "/assets/9.jpg", alt: "Shine Beauty NYC salon interior" },
];

// --- STİLLERİ BASİTLEŞTİRİYORUZ ---
const styles = {
  // Sadece temel bir konteyner
  galleryContainer: {
    maxWidth: "1200px",
    margin: "2rem auto",
    padding: "1rem",
  },
  galleryTitle: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "2rem",
  },
  // CSS Grid yerine basit bir Flexbox kullanıyoruz
  simpleGrid: {
    display: "flex",
    flexWrap: "wrap", // Öğeler sığmazsa alt satıra geçsin
    gap: "16px", // Aralarda boşluk
    justifyContent: "center", // Ortala
  },
  // EN ÖNEMLİ DEĞİŞİKLİK: aspect-ratio yerine sabit boyutlar veriyoruz
  galleryItem: {
    width: "300px",
    height: "300px",
    border: "2px solid red", // Görünüp görünmediğini anlamak için kırmızı çerçeve
  },
  // Resim stilini de basitleştiriyoruz
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Oranı koruyarak doldur
  },
};

const Gallery = () => {
  // SEO kısmı aynı kalabilir, soruna neden olmaz
  const galleryTitle =
    "Shine Beauty NYC Gallery - Stunning Hair & Beauty Looks";
  useEffect(() => {
    document.title = galleryTitle;
  }, []);

  return (
    <div style={styles.galleryContainer}>
      <h1 style={styles.galleryTitle}>Our Gallery (Test Mode)</h1>

      {/* Basitleştirilmiş Grid yapısı */}
      <div style={styles.simpleGrid}>
        {galleryImages.map((image) => (
          // Hover efektleri ve state kaldırıldı
          <div key={image.id} style={styles.galleryItem}>
            <img src={image.src} alt={image.alt} style={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
