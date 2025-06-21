import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Logo from "../assets/logo22.png"; // Logo yolunu kontrol edin

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  // Ekran boyutunu kontrol eden useEffect
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- ANİMASYON VARYANTLARI ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const fadeInUp = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, duration: 0.8 },
    },
  };

  // --- STİLLER ---
  const pageStyle = {
    minHeight: "calc(100vh - 80px)",
    display: "flex",
    alignItems: "center",
    padding: "6rem 0",
    background: "#fdfdfd",
    fontFamily: "'Cormorant Garamond', serif",
    color: "#333",
    overflowX: "hidden", // <-- SORUNU ÇÖZEN EKLEME
  };

  const headlineStyle = {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(2.5rem, 6vw, 4rem)",
    fontWeight: 700,
    color: "#5A7504",
    lineHeight: 1.1,
    textAlign: "center",
  };

  const sublineStyle = {
    fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
    color: "#666",
    textAlign: "center",
    fontStyle: "italic",
    maxWidth: "800px",
    margin: "1rem auto 0 auto",
  };

  const paragraphStyle = {
    fontSize: "clamp(1.1rem, 2.5vw, 1.2rem)",
    lineHeight: 1.8,
    color: "#444",
  };

  const logoStyle = {
    width: "100%",
    maxWidth: "200px",
    margin: "2rem auto", // Margin'i biraz ayarlayarak daha iyi boşluk sağladım
    display: "block",
  };

  const missionStatementStyle = {
    ...paragraphStyle,
    fontSize: "clamp(1.3rem, 4vw, 1.6rem)",
    fontStyle: "italic",
    textAlign: "center",
    color: "#1E8449",
    maxWidth: "700px",
    margin: "0 auto",
  };

  return (
    <motion.div
      style={pageStyle}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Container>
        {/* BÖLÜM 1: GÜÇLÜ GİRİŞ BAŞLIĞI */}
        <Row className="justify-content-center mb-5 pb-4">
          <Col md={10}>
            <motion.h1 style={headlineStyle} variants={fadeInUp}>
              Our Passion, Your Shine.
            </motion.h1>
            <motion.p style={sublineStyle} variants={fadeInUp}>
              "Hair is not just our job – it’s our lifelong passion."
            </motion.p>
          </Col>
        </Row>

        <Row className="justify-content-center g-5 mb-5">
          {/* Sol Sütun */}
          <Col lg={6}>
            <motion.div variants={fadeInUp}>
              <p style={paragraphStyle}>
                We began our journey in the beauty industry at a very young age,
                and from the first moment we touched someone’s hair, we
                understood how deeply it can affect the way people feel about
                themselves. That’s why we don’t just “do hair” – we put our
                hearts into every style, every color, every transformation.
              </p>
              <p style={paragraphStyle} className="mt-4">
                Every person who walks into our salon is more than just a client
                – they become part of our story. Their comfort, satisfaction,
                and confidence are always our top priorities.
              </p>
              <motion.img
                src={Logo}
                alt="Shine Beauty NYC Logo"
                style={logoStyle} // Her zaman aynı stili kullan
                variants={fadeInUp}
              />
            </motion.div>
          </Col>

          {/* Sağ Sütun: Tecrübe ve Yeni Başlangıç */}
          <Col lg={6}>
            <motion.div variants={fadeInUp}>
              {/* Sadece mobil değilken bu logoyu göster (Daha temiz yaklaşım) */}
              {!isMobile && (
                <motion.img
                  src={Logo}
                  alt="Shine Beauty NYC Logo"
                  style={logoStyle}
                  variants={fadeInUp}
                />
              )}
              <p style={paragraphStyle}>
                For over 15 years, we proudly operated two successful salons in
                Nilüfer, one of the most prestigious districts in Bursa, Turkey.
                As a family-run business with over 25 years of experience in the
                industry, we’ve had the privilege of serving thousands of women,
                building deep and lasting relationships with our clients and
                community.
              </p>
              <p style={paragraphStyle} className="mt-4">
                Now based in New York City as <strong>Shine Beauty NYC</strong>,
                we continue our journey with the same dedication and care.
              </p>
            </motion.div>
          </Col>
        </Row>

        {/* BÖLÜM 3: MİSYON CÜMLESİ (VURGULU KAPANIS) */}
        <Row className="justify-content-center pt-4">
          <Col md={10}>
            <motion.p style={missionStatementStyle} variants={fadeInUp}>
              Because we believe when you touch someone’s hair, you can also
              touch their life.
            </motion.p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default About;
