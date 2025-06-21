import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import BookButton from "./BookButton";

// Kategoriler için ikonlar
import { GiScissors, GiVial, GiPalette } from "react-icons/gi";
import { FaPaintBrush } from "react-icons/fa";

// Marka logoları
import WellaLogo from "../assets/wella.png";
import IgoraLogo from "../assets/igora.png";

// Servis verilerini yönetmek için temiz bir yapı
const serviceCategories = [
  {
    title: "Hair Services",
    icon: <GiScissors />,
    services: [
      { name: "Women's Haircut", price: "$82" },
      { name: "Men's Haircut", price: "$55" },
      { name: "Just Trim", price: "$52" },
      { name: "Kids Haircut", price: "$50" },
      { name: "Iron Style (Curly)", price: "$55 - $90" },
      { name: "Updo - Ponytail", price: "$60 - $120" },
      { name: "Extension", price: "Ask Us" },
    ],
  },
  {
    title: "Treatment Services",
    icon: <GiVial />,
    services: [
      { name: "Brazilian Blowout (GK)", price: "$229 & Up" },
      { name: "Brazilian Blowout (Smooth)", price: "$159 & Up" },
      { name: "Gloss (Redken)", price: "$75 & Up" },
      { name: "Keratin (No Straight)", price: "$99 & Up" },
      { name: "After Color", price: "$35 - $65" },
      { name: "Root Treatment", price: "$50 & Up" },
    ],
  },
  {
    title: "Coloring Services",
    icon: <GiPalette />,
    services: [
      { name: "Root Touch Up", price: "$99" },
      { name: "Root Touch Up (Ammonia Free)", price: "$109" },
      { name: "Highlights", price: "$175 & Up" },
      { name: "Double Process", price: "$250 & Up" },
      { name: "Toner", price: "$30 & Up" },
    ],
  },
  {
    title: "Makeup & Brows",
    icon: <FaPaintBrush />,
    services: [
      { name: "Makeup Application", price: "$60 - $90" },
      { name: "Eyelashes Extensions", price: "$30 - $60" },
      { name: "Eyebrow Shaping", price: "$20" },
      { name: "Upper Lips", price: "$10" },
      { name: "Full Face", price: "$50" },
    ],
  },
];

const Services = () => {
  // Mobil cihazları algılamak için state
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- ANİMASYON VARYANTLARI ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const fadeInUp = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  // --- STİLLER ---
  const pageStyle = {
    padding: "6rem 0",
    background: "#fdfdfd",
    fontFamily: "'Cormorant Garamond', serif",
  };

  const headlineStyle = {
    fontSize: "clamp(2.5rem, 6vw, 4rem)",
    fontWeight: 700,
    color: "#1E8449",
    textAlign: "center",
  };

  const serviceCardStyle = {
    background: "white",
    padding: "2.5rem 2rem",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    height: "100%",
  };

  const categoryTitleStyle = {
    fontSize: "2rem",
    fontWeight: 700,
    color: "#333",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "2rem",
    borderBottom: "1px solid #eee",
    paddingBottom: "1rem",
  };

  const serviceItemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    fontSize: "1.1rem",
    marginBottom: "1rem",
    color: "#444",
  };

  const dottedLineStyle = {
    flexGrow: 1,
    borderBottom: "1px dotted #ccc",
    margin: "0 0.5rem",
  };

  const priceStyle = {
    color: "#1E8449",
    fontWeight: 600,
  };

  // --- Marka Bölümü Stilleri ---
  const brandsSectionContainerStyle = {
    background: "white",
    padding: "4rem 2rem",
    marginTop: "5rem",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
  };

  const brandSectionHeadingStyle = {
    fontSize: "clamp(2rem, 5vw, 2.8rem)",
    fontWeight: 700,
    color: "#333",
    textAlign: "center",
    marginBottom: "1rem",
  };

  const brandSectionSubheadingStyle = {
    color: "#666",
    fontSize: "1.1rem",
    maxWidth: "600px",
    margin: "0 auto 4rem auto",
    textAlign: "center",
    lineHeight: 1.6,
  };

  const brandCardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };

  const brandLogoWrapperStyle = {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    background: "#f8f9fa",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1.5rem",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.07)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const brandLogoWrapperHover = {
    transform: "translateY(-8px)",
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
  };

  const brandLogoStyle = {
    maxWidth: "90px",
    height: "auto",
  };

  const brandNameStyle = {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "#1E8449",
    margin: 0,
  };

  const brandDescriptionStyle = {
    fontSize: "0.95rem",
    color: "#555",
    marginTop: "0.5rem",
  };

  // --- Ürün Tedarik Kartı Stilleri ---
  const supplyCardStyle = {
    background: "white",
    padding: "2rem",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    textAlign: "center",
    marginTop: "3rem",
    marginBottom: "3rem",
  };

  const supplyHeadingStyle = {
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "#1E8449",
    marginBottom: "1rem",
  };

  const supplyTextStyle = {
    color: "#666",
    fontSize: "1rem",
    lineHeight: 1.6,
  };

  const supplyLinkStyle = {
    color: "#1E8449",
    textDecoration: "none",
    fontWeight: 600,
    transition: "color 0.3s ease",
  };

  const supplyLinkHoverStyle = {
    color: "#145C2F", // Darker shade for hover
  };

  const bookingUrl =
    "https://www.fresha.com/a/shine-beauty-nyc-new-york-315-west-57th-street-nyfwijkc/booking";

  return (
    <motion.div
      style={pageStyle}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Container>
        <Row className="justify-content-center mb-5 pb-4">
          <Col md={10}>
            <motion.h1 style={headlineStyle} variants={fadeInUp}>
              Our Services & Pricing
            </motion.h1>
            {isMobile && (
              <Row className="justify-content-center mt-3">
                <Col xs={12} md={6} className="text-center">
                  <motion.div variants={fadeInUp}>
                    <BookButton
                      href={bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  </motion.div>
                </Col>
              </Row>
            )}
          </Col>
        </Row>

        {/* Hizmet Kartları */}
        <Row className="g-4">
          {serviceCategories.map((category, index) => (
            <Col lg={6} key={index}>
              <motion.div style={serviceCardStyle} variants={fadeInUp}>
                <h3 style={categoryTitleStyle}>
                  {category.icon} {category.title}
                </h3>
                {category.services.map((service, sIndex) => (
                  <div style={serviceItemStyle} key={sIndex}>
                    <span>{service.name}</span>
                    <span style={dottedLineStyle}></span>
                    <span style={priceStyle}>{service.price}</span>
                  </div>
                ))}
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Ürün Tedarik Kartı */}
        <Row className="justify-content-center">
          <Col md={10}>
            <motion.div
              style={supplyCardStyle}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 style={supplyHeadingStyle}>Our Product Suppliers</h3>
              <p style={supplyTextStyle}>
                We proudly source our premium hair care products from{" "}
                <motion.a
                  href="https://www.protectorofficial.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={supplyLinkStyle}
                  whileHover={supplyLinkHoverStyle}
                >
                  Protector Professional
                </motion.a>
                , a leader in innovative, paraben-free solutions that repair,
                strengthen, and protect all hair types.
              </p>
            </motion.div>
          </Col>
        </Row>

        {/* GÜNCELLENMİŞ MARKA & ÜRÜNLER BÖLÜMÜ */}
        <Row className="justify-content-center">
          <Col md={10}>
            <motion.div
              style={brandsSectionContainerStyle}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.h2 style={brandSectionHeadingStyle} variants={fadeInUp}>
                The Brands We Trust
              </motion.h2>
              <motion.p style={brandSectionSubheadingStyle} variants={fadeInUp}>
                To achieve stunning, long-lasting results, we exclusively use
                industry-leading products known for their exceptional quality
                and performance.
              </motion.p>

              <Row className="justify-content-center align-items-start gy-5 gy-lg-0">
                <Col md={6} className="d-flex justify-content-center">
                  <motion.div style={brandCardStyle} variants={fadeInUp}>
                    <motion.div
                      style={brandLogoWrapperStyle}
                      whileHover={brandLogoWrapperHover}
                    >
                      <img
                        src={WellaLogo}
                        alt="Wella Professionals Logo"
                        style={brandLogoStyle}
                      />
                    </motion.div>
                    <h3 style={brandNameStyle}>Wella Professionals</h3>
                    <p style={brandDescriptionStyle}>
                      Vibrant, rich colors that provide excellent coverage and a
                      brilliant, healthy shine.
                    </p>
                  </motion.div>
                </Col>

                <Col md={6} className="d-flex justify-content-center">
                  <motion.div style={brandCardStyle} variants={fadeInUp}>
                    <motion.div
                      style={brandLogoWrapperStyle}
                      whileHover={brandLogoWrapperHover}
                    >
                      <img
                        src={IgoraLogo}
                        alt="Igora Royal Hair Dye Logo"
                        style={brandLogoStyle}
                      />
                    </motion.div>
                    <h3 style={brandNameStyle}>Igora Royal</h3>
                    <p style={brandDescriptionStyle}>
                      The choice of professionals for absolute color fidelity,
                      intensity, and flawless results.
                    </p>
                  </motion.div>
                </Col>
              </Row>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Services;
