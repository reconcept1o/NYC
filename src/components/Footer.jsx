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
    padding: "3rem 0 1.5rem",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.95rem",
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

  const contentWrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };

  const contactInfoStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    color: "#D1D1D1",
    fontFamily: "'Lato', sans-serif",
    fontSize: "1rem",
  };

  const contactItemStyle = {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "inherit",
    transition: "color 0.3s ease",
  };

  const iconStyle = {
    color: "#1E8449",
    marginRight: "0.75rem",
    fontSize: "1.2rem",
  };

  const footerBottomStyle = {
    paddingTop: "1.5rem",
    marginTop: "2.5rem",
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
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.footer
      style={footerStyle}
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-3"
    >
      <Container>
        <Row className="g-4 g-lg-5 align-items-center justify-content-center text-center text-lg-center">
          {/* SÜTUN 1: MARKA KİMLİĞİ */}
          <Col xs={12} lg={6} className="mb-4 mb-lg-0">
            <motion.div variants={itemVariants} style={contentWrapperStyle}>
              <Link
                to="/"
                style={{ ...brandNameStyle, textDecoration: "none" }}
              >
                Shine Beauty NYC
              </Link>
              <p style={ownerNameStyle}>Mr & Mrs Sen</p>
            </motion.div>
          </Col>

          {/* SÜTUN 2: İLETİŞİM BİLGİLERİ */}
          <Col xs={12} lg={6} className="mb-4 mb-lg-0">
            <motion.div variants={itemVariants} style={contentWrapperStyle}>
              <div style={contactInfoStyle}>
                <a
                  href={`tel:${phoneNumber.replace(/\D/g, "")}`}
                  style={contactItemStyle}
                  whileHover={{ color: "#FFFFFF" }}
                >
                  <FaPhoneAlt style={iconStyle} />
                  <span>{phoneNumber}</span>
                </a>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={contactItemStyle}
                  whileHover={{ color: "#FFFFFF" }}
                >
                  <FaMapMarkerAlt style={iconStyle} />
                  <span>{address}</span>
                </a>
                <a
                  href={`mailto:${emailAddress}`}
                  style={contactItemStyle}
                  whileHover={{ color: "#FFFFFF" }}
                >
                  <FaEnvelope style={iconStyle} />
                  <span>{emailAddress}</span>
                </a>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={contactItemStyle}
                  whileHover={{ color: "#FFFFFF" }}
                >
                  <FaInstagram style={iconStyle} />
                  <span>shine.beauty.nyc</span>
                </a>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* EN ALT BÖLÜM */}
        <Row>
          <Col>
            <div style={footerBottomStyle}>
              <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                <span>
                  © {new Date().getFullYear()} Shine Beauty NYC. All Rights
                  Reserved.
                </span>
                <motion.a
                  href="https://www.linkedin.com/in/s%C3%BCleyman-%C3%BCnver-9b3950245/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 mt-md-0"
                  style={{
                    color: "#777777",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  whileHover={{ color: "#A9A9A9" }}
                >
                  Made by reconcept
                </motion.a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.footer>
  );
};

export default Footer;
