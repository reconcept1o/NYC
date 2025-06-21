import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

// İkonlar
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  // --- VERİLER ---
  const contactDetails = {
    address: "315 W 57th St, New York, NY 10019",
    googleMapsLink: "https://maps.app.goo.gl/Xg8WRs4egWF2CFei9",
    embedMapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.7564980601715!2d-73.9837605!3d40.7673801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258587ccef2bb%3A0x26f8e6cbf1ffbbbd!2s315%20W%2057th%20St%2C%20New%20York%2C%20NY%2010019%2C%20USA!5e0!3m2!1sen!2str!4v1750531505450!5m2!1sen!2str",
    phone: "(347) 978-5053",
    email: "shine.beauty.nyc@hotmail.com",
  };

  // --- ANİMASYON VARYANTLARI ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // --- STİLLER ---
  const styles = {
    page: {
      backgroundColor: "#F9F9F9",
      padding: "8rem 0",
      fontFamily: "'Lato', sans-serif",
      color: "#333",
    },
    headerContainer: {
      marginBottom: "4rem",
    },
    mainTitle: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "clamp(3rem, 7vw, 4.5rem)",
      fontWeight: 700,
      color: "#1a1a1a",
      lineHeight: 1.2,
    },
    subTitle: {
      fontSize: "1.1rem",
      color: "#666",
      maxWidth: "500px",
      marginTop: "1rem",
    },
    infoCard: {
      background: "#FFFFFF",
      padding: "2rem",
      borderRadius: "8px",
      border: "1px solid #EAEAEA",
      textDecoration: "none",
      color: "inherit",
      display: "block",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    cardIcon: {
      backgroundColor: "rgba(212, 175, 55, 0.1)",
      color: "#D4AF37",
      height: "50px",
      width: "50px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.5rem",
      marginBottom: "1.5rem",
    },
    cardTitle: {
      fontWeight: 600,
      fontSize: "1.1rem",
      color: "#222",
      marginBottom: "0.5rem",
    },
    cardText: {
      fontSize: "1rem",
      color: "#555",
      lineHeight: 1.6,
    },
    // --- DÜZELTME BURADA ---
    mapWrapper: {
      borderRadius: "8px",
      overflow: "hidden", // İçerik taşarsa gizle (en önemli kural)
      width: "100%", // Wrapper'ın her zaman %100 genişlikte olmasını sağla
      height: "100%", // Ebeveynin yüksekliğine uy
      minHeight: "450px", // Mobilde çok küçülmesini engellemek için minimum yükseklik
      boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
    },
    // --- DÜZELTME BURADA ---
    iframeStyle: {
      border: 0,
      width: "100%", // iframe'in genişliği her zaman wrapper'ı doldursun
      height: "100%", // iframe'in yüksekliği her zaman wrapper'ı doldursun
      display: "block", // Olası alt boşlukları (inline-block bug'ı) engelle
    },
    finalSlogan: {
      textAlign: "center",
      marginTop: "8rem",
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
      color: "#B0A084",
      fontStyle: "italic",
    },
  };

  return (
    <motion.div
      style={styles.page}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Container>
        {/* BAŞLIK BÖLÜMÜ */}
        <motion.div style={styles.headerContainer} variants={itemVariants}>
          <h1 style={styles.mainTitle}>Reach Out to Us</h1>
          <p style={styles.subTitle}>
            We're here to help you begin your journey to radiance. Get in touch
            to book your appointment or ask any questions.
          </p>
        </motion.div>

        <Row className="gy-5 align-items-stretch">
          {/* SOL SÜTUN: İLETİŞİM KARTLARI */}
          <Col lg={5}>
            <Row className="gy-4">
              <Col xs={12}>
                <motion.a
                  href={contactDetails.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.infoCard}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                  }}
                >
                  <div style={styles.cardIcon}>
                    <FaMapMarkerAlt />
                  </div>
                  <h3 style={styles.cardTitle}>Our Studio</h3>
                  <p style={styles.cardText}>{contactDetails.address}</p>
                </motion.a>
              </Col>
              <Col xs={12}>
                <motion.a
                  href={`tel:${contactDetails.phone}`}
                  style={styles.infoCard}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                  }}
                >
                  <div style={styles.cardIcon}>
                    <FaPhoneAlt />
                  </div>
                  <h3 style={styles.cardTitle}>Call Us</h3>
                  <p style={styles.cardText}>{contactDetails.phone}</p>
                </motion.a>
              </Col>
              <Col xs={12}>
                <motion.a
                  href={`mailto:${contactDetails.email}`}
                  style={styles.infoCard}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                  }}
                >
                  <div style={styles.cardIcon}>
                    <FaEnvelope />
                  </div>
                  <h3 style={styles.cardTitle}>Email Us</h3>
                  <p style={styles.cardText}>{contactDetails.email}</p>
                </motion.a>
              </Col>
            </Row>
          </Col>

          {/* SAĞ SÜTUN: HARİTA */}
          <Col lg={7}>
            <motion.div style={styles.mapWrapper} variants={itemVariants}>
              <iframe
                src={contactDetails.embedMapLink}
                style={styles.iframeStyle} // iframe'e özel stilleri uygula
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shine Beauty NYC Location"
              ></iframe>
            </motion.div>
          </Col>
        </Row>

        {/* SON SLOGAN BÖLÜMÜ */}
        <motion.p style={styles.finalSlogan} variants={itemVariants}>
          "An Invitation to Radiance."
        </motion.p>
      </Container>
    </motion.div>
  );
};

export default Contact;
