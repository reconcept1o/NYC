import React, { useEffect } from "react";
import { motion } from "framer-motion";

// --- ÜRÜN RESİMLERİNİ İMPORT ET ---
import prod11 from "../assets/prod11.webp";
import prod66 from "../assets/prod66.webp";
// Opsiyonel: Eğer özel bir ikon kullanmak isterseniz
// import checkIcon from '../assets/check-icon.svg';

// --- RESPONSIVE TASARIM İÇİN CUSTOM HOOK ---
// Bu hook, ekran boyutunu dinleyerek mobil/tablet/desktop ayrımı yapar
const useMediaQuery = (query) => {
  const [matches, setMatches] = React.useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);
  return matches;
};

// --- ANİMASYON VARİANTLARI ---
// Sayfa elemanları ekrana geldikçe belirmesi için
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const ProdandCert = () => {
  // Sayfa yüklendiğinde en üste scroll yap
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Farklı ekran boyutları için state'ler
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(max-width: 991px)");

  // Ürünün faydalarını bir dizi olarak tutmak daha temizdir
  const keyBenefits = [
    "Hydrates and nourishes dry, damaged hair.",
    "Instantly absorbs for a silky-smooth finish.",
    "Reduces frizz and improves manageability.",
    "Strengthens strands to prevent breakage and split ends.",
    "Improves softness and overall hair texture.",
    "Protects hair from environmental damage and heat styling.",
    "Lightweight, non-greasy formula suitable for daily use.",
  ];

  // --- STİLLER ---
  const styles = {
    pageContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: isMobile ? "8rem 1.5rem 4rem" : "10rem 2rem 5rem", // Header'ın altından başlaması için üst padding
      fontFamily: "'Poppins', sans-serif",
      overflow: "hidden", // Animasyonların taşmasını önler
    },
    mainHeading: {
      textAlign: "center",
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: isMobile ? "2.5rem" : "3.5rem",
      fontWeight: 700,
      color: "#333",
      marginBottom: isMobile ? "3rem" : "5rem",
    },
    productSection: (reverseOnMobile = false) => ({
      display: "flex",
      flexDirection: isTablet
        ? reverseOnMobile
          ? "column-reverse"
          : "column"
        : "row", // Tablet ve mobilde dikey, desktop'ta yatay
      alignItems: "center",
      justifyContent: "center",
      gap: isMobile ? "2rem" : "4rem",
      marginBottom: "6rem",
    }),
    textContainer: {
      flex: 1,
      maxWidth: "550px",
    },
    imageContainer: {
      flex: 1,
      maxWidth: "500px",
      textAlign: "center",
    },
    image: {
      width: "100%",
      height: "auto",
      borderRadius: "16px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    },
    productTitle: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: isMobile ? "2rem" : "2.5rem",
      fontWeight: 600,
      color: "#5A7504", // Marka rengi
      marginBottom: "1rem",
    },
    productDescription: {
      fontSize: "1rem",
      lineHeight: 1.7,
      color: "#555",
      marginBottom: "1.5rem",
    },
    benefitsTitle: {
      fontSize: "1.2rem",
      fontWeight: 600,
      color: "#333",
      marginBottom: "1rem",
      borderLeft: "3px solid #5A7504",
      paddingLeft: "10px",
    },
    benefitsList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    benefitItem: {
      display: "flex",
      alignItems: "flex-start",
      marginBottom: "0.8rem",
      fontSize: "0.95rem",
      color: "#444",
    },
    benefitIcon: {
      color: "#5A7504",
      marginRight: "10px",
      marginTop: "4px",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.pageContainer}>
      <motion.h1
        style={styles.mainHeading}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Our Featured Products
      </motion.h1>

      {/* --- BÖLÜM 1: Resim Sağda --- */}
      <motion.section
        style={styles.productSection()}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div style={styles.textContainer}>
          <h2 style={styles.productTitle}>Elixir Argan Oil</h2>
          <p style={styles.productDescription}>
            Argan Oil is the ultimate must-have for achieving silky-smooth,
            strong, and shiny hair. Its lightweight, non-greasy formula absorbs
            instantly, providing long-lasting care without leaving residue.
          </p>
          <h3 style={styles.benefitsTitle}>Key Benefits</h3>
          <ul style={styles.benefitsList}>
            {keyBenefits.map((benefit, index) => (
              <li key={index} style={styles.benefitItem}>
                <span style={styles.benefitIcon}>✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div style={styles.imageContainer}>
          <img
            src={prod11}
            alt="Elixir Argan Oil Bottle"
            style={styles.image}
          />
        </div>
      </motion.section>

      {/* --- BÖLÜM 2: Resim Solda --- */}
      <motion.section
        style={styles.productSection(true)} // reverseOnMobile = true
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div style={styles.imageContainer}>
          <img
            src={prod66}
            alt="Daily Argan Treatment Product"
            style={styles.image}
          />
        </div>
        <div style={styles.textContainer}>
          <h2 style={styles.productTitle}>Daily Argan Treatment</h2>
          <p style={styles.productDescription}>
            Nourish and protect your hair with Argan Oil. This luxurious formula
            hydrates, repairs, and adds shine for smooth, healthy, and
            frizz-free hair every day. Perfect for all hair types, it's your
            go-to solution for daily care and vitality.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default ProdandCert;
