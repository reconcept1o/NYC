import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

// --- VERİLER ---
const phoneNumber = "(347) 978-5053";
const address = "315 West 57th Street, New York, NY 10019";
const emailAddress = "shine.beauty.nyc@hotmail.com";
const googleMapsUrl = "https://maps.app.goo.gl/Xg8WRs4egWF2CFei9";
const instagramUrl = "https://www.instagram.com/shine.beauty.nyc";

const Footer = () => {
  // --- STİL OBJELERİ ---
  const footerStyle = {
    backgroundColor: "#1C2526",
    color: "#B0B0B0",
    padding: "4rem 0 2rem",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.95rem",
    overflowX: "hidden",
  };

  const brandNameStyle = {
    fontSize: "2.8rem",
    fontWeight: 700,
    color: "#FFFFFF",
    fontFamily: "'Cormorant Garamond', serif",
    lineHeight: 1.1,
    textDecoration: "none",
  };

  const ownerNameStyle = {
    color: "#888888",
    fontSize: "0.9rem",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    marginTop: "0.5rem",
  };

  const contactInfoStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    color: "#D1D1D1",
    fontFamily: "'Lato', sans-serif",
    fontSize: "1rem",
    width: "100%",
    maxWidth: "350px",
  };

  const contactItemStyle = {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "inherit",
    textAlign: "left",
  };

  const iconStyle = {
    color: "#1E8449",
    marginRight: "0.75rem",
    fontSize: "1.2rem",
    flexShrink: 0,
  };

  const footerBottomStyle = {
    paddingTop: "2rem",
    marginTop: "2rem",
    borderTop: "1px solid #2D3A3B",
    fontSize: "0.8rem",
    color: "#777777",
    textAlign: "center",
  };

  // --- ANİMASYON VARYANTLARI ---
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.footer
      style={footerStyle}
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Container>
        <Row className="gy-5 justify-content-between text-center text-lg-start">
          {/* SÜTUN 1: MARKA KİMLİĞİ */}
          <Col xs={12} lg={5}>
            <motion.div
              variants={itemVariants}
              className="d-flex flex-column align-items-center align-items-lg-start"
            >
              <Link to="/" style={brandNameStyle}>
                Shine Beauty NYC
              </Link>
              <p style={ownerNameStyle}>Mr. & Mrs. Sen</p>
            </motion.div>
          </Col>

          {/* SÜTUN 2: İLETİŞİM BİLGİLERİ */}
          <Col xs={12} lg={6}>
            <motion.div
              variants={itemVariants}
              className="d-flex flex-column align-items-center align-items-lg-start"
            >
              <div style={contactInfoStyle}>
                <motion.a
                  href={`tel:${phoneNumber.replace(/\D/g, "")}`}
                  style={contactItemStyle}
                  whileHover={{ color: "#FFFFFF" }}
                >
                  <FaPhoneAlt style={iconStyle} />
                  <span>{phoneNumber}</span>
                </motion.a>
                <motion.a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={contactItemStyle}
                  whileHover={{ color: "#FFFFFF" }}
                >
                  <FaMapMarkerAlt style={iconStyle} />
                  <span>{address}</span>
                </motion.a>
                <motion.a
                  href={`mailto:${emailAddress}`}
                  style={contactItemStyle}
                  whileHover={{ color: "#FFFFFF" }}
                >
                  <FaEnvelope style={iconStyle} />
                  <span>{emailAddress}</span>
                </motion.a>
                <motion.a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={contactItemStyle}
                  whileHover={{ color: "#FFFFFF" }}
                >
                  <FaInstagram style={iconStyle} />
                  <span>shine.beauty.nyc</span>
                </motion.a>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* EN ALT BÖLÜM */}
        <Row>
          <Col>
            <motion.div style={footerBottomStyle} variants={itemVariants}>
              {/* --- DEĞİŞİKLİK BURADA --- */}
              <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-sm-2">
                <span>
                  © {new Date().getFullYear()} Shine Beauty NYC. All Rights
                  Reserved.
                </span>
                {/* Bu ayırıcı | mobilde gizlenir, büyük ekranda görünür */}
                <span className="d-none d-sm-inline">|</span>
                <motion.a
                  href="https://www.linkedin.com/in/s%C3%BCleyman-%C3%BCnver-9b3950245/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    marginTop: "0.25rem",
                  }}
                  whileHover={{
                    color: "#FFFFFF",
                    transition: { duration: 0.3 },
                  }}
                >
                  Create by ReconceptX
                </motion.a>
              </div>
              {/* --- DEĞİŞİKLİK BİTTİ --- */}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.footer>
  );
};

export default Footer;
