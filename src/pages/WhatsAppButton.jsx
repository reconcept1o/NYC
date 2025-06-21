import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// --- AYARLAR ---
const phoneNumber = "13479785053";
const whatsappUrl = `https://wa.me/${phoneNumber}`;

const WhatsappButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  // --- STİLLER ---
  const styles = {
    // Ana buton, artık bir kapsayıcı gibi davranıyor.
    buttonContainer: {
      position: "fixed",
      bottom: "30px",
      right: "30px",
      zIndex: 1000,
      cursor: "pointer",
    },
    // Görsel butonun kendisi
    button: {
      backgroundColor: "#25D366",
      color: "#FFFFFF",
      height: "60px",
      borderRadius: "30px", // Her zaman yuvarlak köşeler için
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 20px", // Genişlediğinde metin için yan boşluklar
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
      textDecoration: "none",
      overflow: "hidden", // Metnin animasyon sırasında taşmasını önler
      gap: "10px", // İkon ve metin arası boşluk
    },
    icon: {
      fontSize: "2rem",
      flexShrink: 0, // Buton daraldığında ikonun küçülmesini engeller
    },
    text: {
      color: "#FFFFFF",
      fontWeight: 600,
      fontSize: "1rem",
      whiteSpace: "nowrap", // "Book Now" yazısının kırılmasını önler
    },
  };

  // --- ANİMASYONLAR ---
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20, delay: 0.5 },
    },
  };

  // Metin için giriş/çıkış animasyonu
  const textVariants = {
    initial: { opacity: 0, x: -10, width: 0 },
    animate: {
      opacity: 1,
      x: 0,
      width: "auto",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: -10,
      width: 0,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <motion.div
      style={styles.buttonContainer}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book an appointment on WhatsApp"
        style={styles.button}
        // Butonun genişliğini ve rengini animasyonla değiştir
        animate={{
          width: isHovered ? "170px" : "60px",
          backgroundColor: isHovered ? "#D4AF37" : "#25D366", // Hover'da sitenin altın rengi
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <FaWhatsapp style={styles.icon} />
        <AnimatePresence>
          {isHovered && (
            <motion.span
              style={styles.text}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              Book Now
            </motion.span>
          )}
        </AnimatePresence>
      </motion.a>
    </motion.div>
  );
};

export default WhatsappButton;
