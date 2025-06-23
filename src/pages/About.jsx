import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async"; // Import Helmet
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Logo from "../assets/logo22.webp"; // Ensure this path is correct, used for OG image

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- SEO Configuration ---
  const siteUrl = "https://www.yourshinebeautynyc.com"; // IMPORTANT: Replace with your actual domain
  const pageUrl = `${siteUrl}/about`; // Full URL for this page
  // Assuming 'Logo' import resolves to a public path like '/static/media/logo22.hash.png'
  const ogImageUrl = `${siteUrl}${Logo}`;

  // --- ANIMATION VARIANTS ---
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

  // --- STYLES ---
  const pageStyle = {
    minHeight: "calc(100vh - 80px)",
    display: "flex",
    alignItems: "center",
    padding: "6rem 0",
    background: "#fdfdfd",
    fontFamily: "'Cormorant Garamond', serif",
    color: "#333",
    overflowX: "hidden",
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
    margin: "2rem auto",
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
    <>
      <Helmet>
        {/* --- Primary Meta Tags --- */}
        <title>About Us | Shine Beauty NYC - Our Passion, Your Shine</title>
        <meta
          name="description"
          content="Discover the story behind Shine Beauty NYC. Learn about our 25+ years of experience, our passion for beauty, and our commitment to clients in New York City."
        />
        <meta
          name="keywords"
          content="About Shine Beauty NYC, beauty salon NYC, hair salon NYC, family-run salon, experienced stylists, New York hair care, story of Shine Beauty"
        />
        <link rel="canonical" href={pageUrl} />

        {/* --- Open Graph / Facebook Meta Tags --- */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:title"
          content="About Us | Shine Beauty NYC - Our Passion, Your Shine"
        />
        <meta
          property="og:description"
          content="Learn about the journey of Shine Beauty NYC, our dedication to artistry, and our commitment to making you shine. 25+ years of experience, now in NYC."
        />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:alt" content="Shine Beauty NYC Logo" />
        <meta property="og:site_name" content="Shine Beauty NYC" />
        <meta property="og:locale" content="en_US" />

        {/* --- Twitter Card Meta Tags --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta
          name="twitter:title"
          content="About Us | Shine Beauty NYC - Our Passion, Your Shine"
        />
        <meta
          name="twitter:description"
          content="Discover the story behind Shine Beauty NYC, our passion for beauty, and our commitment to clients."
        />
        <meta name="twitter:image" content={ogImageUrl} />
        {/* Optional: If you have a Twitter handle for the site or creator
        <meta name="twitter:site" content="@YourTwitterSiteHandle" />
        <meta name="twitter:creator" content="@YourTwitterCreatorHandle" />
        */}

        {/* --- Standard Meta Tags --- */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <meta httpEquiv="Content-Language" content="en" /> */}

        {/* --- Favicon Lins (example - update paths to your actual favicons) --- */}
        {/*
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        */}
      </Helmet>

      <motion.div
        style={pageStyle}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Container>
          {/* SECTION 1: STRONG INTRODUCTORY HEADLINE */}
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
            {/* Left Column */}
            <Col lg={6}>
              <motion.div variants={fadeInUp}>
                <p style={paragraphStyle}>
                  We began our journey in the beauty industry at a very young
                  age, and from the first moment we touched someone’s hair, we
                  understood how deeply it can affect the way people feel about
                  themselves. That’s why we don’t just “do hair” – we put our
                  hearts into every style, every color, every transformation.
                </p>
                <p style={paragraphStyle} className="mt-4">
                  Every person who walks into our salon is more than just a
                  client – they become part of our story. Their comfort,
                  satisfaction, and confidence are always our top priorities.
                </p>
                <motion.img
                  src={Logo}
                  alt="Shine Beauty NYC Logo"
                  style={logoStyle} // Always use the same style
                  variants={fadeInUp}
                />
              </motion.div>
            </Col>

            {/* Right Column: Experience and New Beginnings */}
            <Col lg={6}>
              <motion.div variants={fadeInUp}>
                {!isMobile && (
                  <motion.img
                    src={Logo}
                    alt="Shine Beauty NYC Logo"
                    style={logoStyle}
                    variants={fadeInUp}
                  />
                )}
                <p style={paragraphStyle}>
                  For over 15 years, we proudly operated two successful salons
                  in Nilüfer, one of the most prestigious districts in Bursa,
                  Turkey. As a family-run business with over 25 years of
                  experience in the industry, we’ve had the privilege of serving
                  thousands of women, building deep and lasting relationships
                  with our clients and community.
                </p>
                <p style={paragraphStyle} className="mt-4">
                  Now based in New York City as{" "}
                  <strong>Shine Beauty NYC</strong>, we continue our journey
                  with the same dedication and care.
                </p>
              </motion.div>
            </Col>
          </Row>

          {/* SECTION 3: MISSION STATEMENT (EMPHATIC CLOSING) */}
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
    </>
  );
};

export default About;
