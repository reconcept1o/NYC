import React, { useEffect } from "react";

// --- VERİ ---
// Yeni Reel linkini listeye ekledik.
const postLinks = [
  "https://www.instagram.com/p/C_wTo7DpKUQ/",
  "https://www.instagram.com/reel/DBE_B-jvYqa/", // <-- YENİ REEL BURAYA EKLENDİ
];

// --- STİLLER ---
// Stil kodunda hiçbir değişiklik yapmamıza gerek yok.
const styles = {
  galleryContainer: {
    maxWidth: "1200px",
    margin: "2rem auto",
    padding: "0 1rem",
    textAlign: "center",
    fontFamily: "sans-serif",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "2rem",
    justifyItems: "center",
  },
};

// --- BİLEŞEN ---
// Bu bileşende de hiçbir değişiklik yapmamıza gerek yok.
const InstagramPost = ({ permalink }) => {
  const wrapperStyle = {
    maxWidth: "400px",
    width: "100%",
    aspectRatio: "1 / 1",
    overflow: "hidden",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
    position: "relative",
  };

  const iframeHackStyles = `
    .instagram-embed-wrapper-${permalink.split("/")[4]} iframe {
      width: 100% !important;
      position: absolute !important;
      top: -54px; 
    }
  `;

  // Her gönderi için benzersiz bir className oluşturarak stil çakışmasını önlüyoruz.
  const uniqueWrapperClass = `instagram-embed-wrapper-${
    permalink.split("/")[4]
  }`;

  return (
    <div style={wrapperStyle}>
      <style>{iframeHackStyles}</style>
      <div className={uniqueWrapperClass}>
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={permalink}
          data-instgrm-version="14"
        ></blockquote>
      </div>
    </div>
  );
};

const Gallery = () => {
  useEffect(() => {
    const scriptId = "instagram-embed-script";
    if (document.getElementById(scriptId)) {
      // Script zaten varsa, Instagram'ın yeni eklenenleri işlemesi için process fonksiyonunu çağır.
      window.instgrm?.Embeds.process();
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <div style={styles.galleryContainer}>
      <h1 style={styles.galleryTitle}>Our Gallery</h1>
      <p style={styles.gallerySubtitle}>
        Discover the artistry and transformations from our talented stylists.
      </p>
      <div style={styles.galleryGrid}>
        {postLinks.map((link, index) => (
          <InstagramPost key={index} permalink={link} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
