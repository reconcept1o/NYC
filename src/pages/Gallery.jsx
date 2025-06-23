import React, { useState, useEffect } from "react";

// --- YENİ İMPORTLAR ---
import { motion } from "framer-motion"; // Animasyon için
import BookButton from "../pages/BookButton"; // Buton için (yolu kontrol edin)

// KÜTÜPHANE İMPORTLARI
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";

// CSS İMPORTLARI
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "yet-another-react-lightbox/styles.css";

// --- VERİ (RESİM İMPORTLARI) ---
import image1 from "../assets/galery/1.webp";
import image2 from "../assets/galery/2.webp";
import image3 from "../assets/galery/3.webp";
import image4 from "../assets/galery/4.webp";
import image5 from "../assets/galery/5.webp";
import image6 from "../assets/galery/6.webp";
import image7 from "../assets/galery/7.webp";
import image8 from "../assets/galery/8.webp";
import image9 from "../assets/galery/9.webp";
import image10 from "../assets/galery/10.webp";
import image11 from "../assets/galery/11.webp";
import image12 from "../assets/galery/12.webp";
import image13 from "../assets/galery/13.webp";
import image14 from "../assets/galery/14.webp";
import image15 from "../assets/galery/15.webp";
import image16 from "../assets/galery/16.webp";
import image17 from "../assets/galery/17.webp";
import image18 from "../assets/galery/18.webp";
import image19 from "../assets/galery/19.webp";
import image20 from "../assets/galery/20.webp";
import image21 from "../assets/galery/21.webp";

const allImageModules = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
];

const galleryImages = allImageModules.map((src, index) => ({
  src,
  alt: `Gallery image ${index + 1}`,
}));

// --- ANİMASYON VARİANTLARI ---
const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const textItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

// --- CUSTOM HOOK ---
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);
  return matches;
};

// --- STİLLER ---
const styles = {
  galleryContainer: {
    maxWidth: "1200px",
    margin: "2rem auto",
    padding: "0 1rem",
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif",
  },
  slogan: {
    fontSize: "clamp(2rem, 5vw, 3.5rem)",
    fontWeight: 700,
    color: "#333",
    marginBottom: "1rem",
    textTransform: "uppercase",
    letterSpacing: "3px",
  },
  introText: {
    fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
    color: "#666",
    maxWidth: "700px",
    margin: "0 auto 2rem auto",
    lineHeight: "1.6",
  },
  desktopGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "1rem",
  },
  gridItem: {
    overflow: "hidden",
    borderRadius: "8px",
    cursor: "pointer",
    aspectRatio: "1 / 1",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  thumbnail: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.4s ease",
  },
  carouselImage: {
    display: "block",
    width: "100%",
    height: "auto",
    maxHeight: "70vh",
    objectFit: "contain",
  },
};

// --- ANA GALERİ BİLEŞENİ ---
const Gallery = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div style={styles.galleryContainer}>
      <motion.div
        variants={textContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 style={styles.slogan} variants={textItemVariants}>
          The Art of Transformation
        </motion.h1>
        <motion.p style={styles.introText} variants={textItemVariants}>
          Step into the world of Shine Beauty NYC. This gallery is a testament
          to the skill, passion, and creativity our stylists pour into every
          client's look. Explore the transformations and envision your own.
        </motion.p>
        <motion.div
          variants={textItemVariants}
          style={{ marginBottom: "3rem" }}
        >
          <BookButton />
        </motion.div>
      </motion.div>

      {isMobile ? (
        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.src}
                alt={image.alt}
                style={styles.carouselImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div style={styles.desktopGrid}>
          {galleryImages.map((image, index) => (
            <div
              key={index}
              style={styles.gridItem}
              onClick={() => openLightbox(index)}
              onMouseOver={(e) =>
                (e.currentTarget.querySelector("img").style.transform =
                  "scale(1.1)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.querySelector("img").style.transform =
                  "scale(1)")
              }
            >
              <img src={image.src} alt={image.alt} style={styles.thumbnail} />
            </div>
          ))}
        </div>
      )}

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={galleryImages}
        index={lightboxIndex}
      />
    </div>
  );
};

export default Gallery;
