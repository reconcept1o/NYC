import React, { useState, useEffect } from "react";

// Galeride göstermek istediğiniz resimlerin listesi
const galleryImages = [
  {
    id: 1,
    src: "https://nyc-slymns-projects.vercel.app/assets/2.jpg",
    alt: "Stunning blonde balayage",
  },
  {
    id: 2,
    src: "https://nyc-slymns-projects.vercel.app/assets/3.jpg",
    alt: "Elegant hair styling",
  },
  {
    id: 3,
    src: "https://nyc-slymns-projects.vercel.app/assets/4.jpg",
    alt: "Professional hair coloring",
  },
  {
    id: 4,
    src: "https://nyc-slymns-projects.vercel.app/assets/5.jpg",
    alt: "Modern haircut for women",
  },
  {
    id: 5,
    src: "https://nyc-slymns-projects.vercel.app/assets/6.jpg",
    alt: "Beautiful hair transformation",
  },
  {
    id: 6,
    src: "https://nyc-slymns-projects.vercel.app/assets/7.jpg",
    alt: "Chic and stylish hair",
  },
  {
    id: 7,
    src: "https://nyc-slymns-projects.vercel.app/assets/8.jpg",
    alt: "Long wavy hair style",
  },
  {
    id: 8,
    src: "https://nyc-slymns-projects.vercel.app/assets/9.jpg",
    alt: "Shine Beauty NYC salon interior",
  },
];

// Stil nesnelerini bileşen dışında tanımlamak, her render'da yeniden oluşturulmalarını engeller.
const styles = {
  galleryContainer: {
    maxWidth: "1200px",
    margin: "2rem auto",
    padding: "0 1rem",
    textAlign: "center",
    fontFamily: "sans-serif", // Okunabilirlik için bir font ailesi ekledim
  },
  galleryTitle: {
    fontSize: "2.5rem",
    fontWeight: 600,
    marginBottom: "0.5rem",
    color: "#333",
  },
  gallerySubtitle: {
    fontSize: "1.1rem",
    color: "#666",
    marginBottom: "3rem",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  galleryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.5rem",
  },
  galleryItem: {
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    aspectRatio: "1 / 1",
  },
  galleryItemHover: {
    // :hover durumunda eklenecek stiller
    transform: "scale(1.05) translateY(-5px)",
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.4s ease",
  },
  imageHover: {
    // :hover durumunda resme eklenecek stil
    transform: "scale(1.1)",
  },
};

const Gallery = () => {
  // SEO meta verileri
  const galleryTitle =
    "Shine Beauty NYC Gallery - Stunning Hair & Beauty Looks";
  const galleryDescription =
    "Explore the stunning hair and beauty transformations at Shine Beauty NYC, the premier women's salon in New York.";

  // Üzerine gelinen resmin id'sini tutmak için state
  const [hoveredId, setHoveredId] = useState(null);

  // SEO için useEffect hook'u
  useEffect(() => {
    document.title = galleryTitle;

    const setMetaTag = (attr, value, content) => {
      let element = document.querySelector(`meta[${attr}="${value}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, value);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    setMetaTag("name", "description", galleryDescription);
    setMetaTag("property", "og:title", galleryTitle);
    setMetaTag("property", "og:description", galleryDescription);
    setMetaTag(
      "property",
      "og:image",
      "https://nyc-slymns-projects.vercel.app/assets/2.jpg"
    );
    setMetaTag("property", "og:url", "https://nyc-slymns-projects.vercel.app/gallery");
    setMetaTag("property", "og:type", "website");
    setMetaTag("name", "robots", "index, follow");

    return () => {
      document.title = "Shine Beauty NYC";
    };
  }, []);

  return (
    <div style={styles.galleryContainer}>
      <h1 style={styles.galleryTitle}>Our Gallery</h1>
      <p style={styles.gallerySubtitle}>
        Discover the artistry and transformations from our talented stylists.
      </p>
      <div style={styles.galleryGrid}>
        {galleryImages.map((image) => {
          // Bu resmin üzerine gelinip gelinmediğini kontrol et
          const isHovered = image.id === hoveredId;

          // Duruma göre stilleri birleştir
          const itemStyle = isHovered
            ? { ...styles.galleryItem, ...styles.galleryItemHover }
            : styles.galleryItem;

          const imgStyle = isHovered
            ? { ...styles.image, ...styles.imageHover }
            : styles.image;

          return (
            <div
              key={image.id}
              style={itemStyle}
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                style={imgStyle}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
