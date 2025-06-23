import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "../assets/logo22.png"; // Used for OG image
import Salon1 from "../assets/1.webp";
import Salon2 from "../assets/2.webp";
import AdvertiseImg from "../assets/advertise.webp";
// Kaldırılan logolar: WellaLogo, IgoraLogo, Prod22, Prod44
import BookButton from "./BookButton";

import Services from "./Services";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const salonImages = [
    { src: Salon1, alt: "Elegant salon interior" },
    { src: Salon2, alt: "Modern beauty treatment room" },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    const timer = setTimeout(() => {
      setCurrentSlide((prev) =>
        prev === salonImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, [currentSlide, salonImages.length]);

  // --- SEO Configuration ---
  const siteUrl = "https://www.yourshinebeautynyc.com"; // IMPORTANT: Replace with your actual domain
  const ogImageUrl = `${siteUrl}${Logo}`;

  // --- ANİMASYON VARYANTLARI ---
  const headlineContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.2 },
    },
  };
  const letterVariants = {
    hidden: { opacity: 0, y: -50, rotate: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { type: "spring", damping: 12, stiffness: 200 },
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

  const slideInFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  // --- STİLLER ---
  const heroStyle = {
    minHeight: "calc(100vh - 80px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "5rem 0",
    background: "#fdfdfd",
    overflowX: "hidden",
  };

  const logoWrapperStyle = {
    width: "100%",
    maxWidth: isMobile ? "200px" : "350px",
    margin: "0 auto",
  };

  const advertisementWrapperStyle = {
    position: "relative",
    width: "100%",
    maxWidth: isMobile ? "200px" : "350px",
    margin: "0 auto",
    borderRadius: "15px",
    overflow: "hidden",
  };

  const imageWrapperStyle = {
    position: "relative",
    width: "100%",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.15)",
    aspectRatio: isMobile ? "4 / 3" : "16 / 9",
  };

  const imageStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const headlineStyle = {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(2.5rem, 6vw, 4rem)",
    fontWeight: 700,
    color: "#5A7504",
    lineHeight: 1.1,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const sublineStyle = {
    fontFamily: "'Playfair Display', serif",
    fontStyle: "italic",
    fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
    color: "#6A737C",
    lineHeight: 1.7,
    maxWidth: "650px",
    margin: "0 auto",
  };

  const ctaCardStyle = {
    background: "white",
    padding: isMobile ? "2rem" : "2.5rem 3rem",
    borderRadius: "15px",
    boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
    position: "relative",
    zIndex: 2,
  };

  const ctaHeadlineStyle = {
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 700,
    fontSize: "clamp(1.5rem, 4vw, 2rem)",
    marginBottom: "1.5rem",
  };

  const advertisementImgStyle = {
    width: "100%",
    height: "auto",
  };

  const captionStyle = {
    fontFamily: "'Poppins', sans-serif",
    marginTop: "1rem",
    color: "#d9534f",
    fontWeight: "700",
    fontSize: "0.9rem",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  };

  const headlineText = "Experience the Art of Beauty.";
  const bookingUrl =
    "https://www.fresha.com/a/shine-beauty-nyc-new-york-315-west-57th-street-nyfwijkc/booking";

  const InfoStrip = () => {
    const stripStyle = {
      backgroundColor: "#5A7504",
      color: "white",
      padding: "12px 15px",
      textAlign: "center",
      position: "sticky",
      top: 0,
      zIndex: 1029,
      fontFamily: "'Poppins', sans-serif",
      fontSize: "0.9rem",
      fontWeight: 500,
      letterSpacing: "0.5px",
    };

    return (
      <div style={stripStyle}>
        ✨Book instantly on Fresha.com using the 'Book Now' button, or text us
        via the WhatsApp icon.
      </div>
    );
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <Helmet>
        {/* --- Primary Meta Tags --- */}
        <title>
          Shine Beauty NYC | Premier Hair Salon & Beauty Treatments in NYC
        </title>
        <meta
          name="description"
          content="Experience the art of beauty at Shine Beauty NYC. Our expert stylists offer personalized hair treatments, coloring, and a luxurious salon experience in the heart of New York City. Book your appointment today!"
        />
        <meta
          name="keywords"
          content="Shine Beauty NYC, hair salon NYC, beauty salon New York, hair coloring NYC, hair treatments NYC, luxury salon NYC, book hair appointment, best salon nyc, midtown salon"
        />
        <link rel="canonical" href={siteUrl} />

        {/* --- Open Graph / Facebook Meta Tags --- */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta
          property="og:title"
          content="Shine Beauty NYC | Premier Hair Salon & Beauty Treatments"
        />
        <meta
          property="og:description"
          content="Discover personalized hair treatments, expert coloring, and a luxurious salon experience at Shine Beauty NYC. Book now!"
        />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:alt" content="Shine Beauty NYC Logo" />
        <meta property="og:site_name" content="Shine Beauty NYC" />
        <meta property="og:locale" content="en_US" />

        {/* --- Twitter Card Meta Tags --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta
          name="twitter:title"
          content="Shine Beauty NYC | Premier Hair Salon & Beauty Treatments"
        />
        <meta
          name="twitter:description"
          content="Discover personalized hair treatments, expert coloring, and a luxurious salon experience at Shine Beauty NYC. Book now!"
        />
        <meta name="twitter:image" content={ogImageUrl} />

        {/* --- Standard Meta Tags --- */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
      </Helmet>

      <InfoStrip />

      <motion.div
        style={heroStyle}
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <Container>
          {isMobile && (
            <Row className="justify-content-center text-center mb-5">
              <Col>
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

          <Row className="justify-content-center text-center">
            <Col xs={12} className="mb-4">
              <motion.h1
                style={headlineStyle}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={headlineContainerVariants}
              >
                {headlineText.split(" ").map((word, wordIndex) => (
                  <React.Fragment key={wordIndex}>
                    <span style={{ display: "inline-block" }}>
                      {Array.from(word).map((letter, letterIndex) => (
                        <motion.span
                          key={`${wordIndex}-${letterIndex}`}
                          variants={letterVariants}
                          style={{ display: "inline-block" }}
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </span>
                    {wordIndex < headlineText.split(" ").length - 1 ? (
                      <span style={{ whiteSpace: "pre" }}> </span>
                    ) : null}
                  </React.Fragment>
                ))}
              </motion.h1>
            </Col>

            <Col xs={12} className="my-3 my-md-4">
              <Row className="justify-content-center align-items-center">
                <Col
                  md={6}
                  lg={5}
                  className="mb-5 mb-md-0 d-flex justify-content-center justify-content-md-end"
                >
                  <motion.div
                    style={logoWrapperStyle}
                    variants={fadeInUp}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }}
                  >
                    <img
                      src={Logo}
                      alt="Shine Beauty NYC Logo"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </motion.div>
                </Col>
                <Col
                  md={6}
                  lg={5}
                  className="d-flex justify-content-center justify-content-md-start"
                >
                  <motion.div className="text-center" variants={fadeInUp}>
                    <motion.div
                      style={advertisementWrapperStyle}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img
                        src={AdvertiseImg}
                        style={advertisementImgStyle}
                        alt="Special promotion: 20% off on Tuesdays"
                      />
                    </motion.div>
                    <p style={captionStyle}>Except Saturday</p>
                  </motion.div>
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={9} className="mt-4">
              <motion.p style={sublineStyle} variants={fadeInUp}>
                Your sanctuary in the heart of NYC. Discover personalized
                treatments designed to make you shine from within.
              </motion.p>
            </Col>
          </Row>
        </Container>
      </motion.div>

      <motion.div
        style={{
          position: "relative",
          padding: "4rem 0 6rem 0",
          background: "#fdfdfd",
          overflow: "hidden",
        }}
        variants={slideInFromRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} lg={11}>
              <motion.div style={imageWrapperStyle} variants={fadeInUp}>
                <AnimatePresence>
                  <motion.img
                    key={currentSlide}
                    src={salonImages[currentSlide].src}
                    alt={salonImages[currentSlide].alt}
                    style={imageStyle}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                  />
                </AnimatePresence>
              </motion.div>
            </Col>
          </Row>
          <Row className="justify-content-center justify-content-lg-end">
            <Col xs={11} md={8} lg={6} xl={5}>
              <motion.div
                style={{
                  ...ctaCardStyle,
                  marginTop: isMobile ? "-3rem" : "-8rem",
                  marginRight: isMobile ? "0" : "2rem",
                }}
                variants={fadeInUp}
              >
                <div className="text-center">
                  <h3 style={ctaHeadlineStyle}>Ready to Shine?</h3>
                  <BookButton
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div>

      {/* "Quality We Trust" BÖLÜMÜ TAMAMEN KALDIRILDI */}

      <Services />
    </div>
  );
};

export default Home;
