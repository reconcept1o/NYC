import React from "react";
import { Helmet } from "react-helmet-async"; // Import Helmet
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

// Icons
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// You might want to import an image for the OG tag, e.g., a nice shot of your salon exterior or a map pin graphic
// import ContactOgImage from '../assets/contact_og_image.jpg'; // Example

const Contact = () => {
  // --- SEO Configuration ---
  const siteUrl = "https://www.yourshinebeautynyc.com"; // IMPORTANT: Replace with your actual domain
  const pageUrl = `${siteUrl}/contact`; // Full URL for this page
  // Define an OG image. If you imported one, use it. Otherwise, use a default or your main logo.
  // const ogImageUrl = `${siteUrl}${ContactOgImage}`; // If you have a specific contact page OG image
  const ogImageUrl = `${siteUrl}/path/to/your/default_contact_og_image.jpg`; // Replace with a real path to a generic image or your logo if no specific one

  // --- DATA ---
  const contactDetails = {
    address: "315 W 57th St, New York, NY 10019",
    googleMapsLink: "https://maps.app.goo.gl/Xg8WRs4egWF2CFei9",
    embedMapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.7564980601715!2d-73.9837605!3d40.7673801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258587ccef2bb%3A0x26f8e6cbf1ffbbbd!2s315%20W%2057th%20St%2C%20New%20York%2C%20NY%2010019%2C%20USA!5e0!3m2!1sen!2str!4v1750531505450!5m2!1sen!2str", // Note: The 'tr' in the URL might be for Turkish map labels, consider using a generic 'en' if preferred for US audience
    phone: "(347) 978-5053",
    email: "shine.beauty.nyc@hotmail.com",
  };

  // --- ANIMATION VARIANTS ---
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

  // --- STYLES (Your existing styles remain the same) ---
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
    mapWrapper: {
      borderRadius: "8px",
      overflow: "hidden",
      width: "100%",
      height: "100%",
      minHeight: "450px",
      boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
    },
    iframeStyle: {
      border: 0,
      width: "100%",
      height: "100%",
      display: "block",
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
    <>
      <Helmet>
        {/* --- Primary Meta Tags --- */}
        <title>Contact Us | Shine Beauty NYC - Get In Touch</title>
        <meta
          name="description"
          content={`Contact Shine Beauty NYC. Visit us at ${contactDetails.address}, call ${contactDetails.phone}, or email us. Book your appointment or ask any questions.`}
        />
        <meta
          name="keywords"
          content="Contact Shine Beauty NYC, address, phone, email, book appointment NYC, hair salon New York, beauty salon NYC location, get in touch"
        />
        <link rel="canonical" href={pageUrl} />
        {/* --- Open Graph / Facebook Meta Tags --- */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:title"
          content="Contact Us | Shine Beauty NYC - Get In Touch"
        />
        <meta
          property="og:description"
          content={`Find Shine Beauty NYC at ${contactDetails.address}. Call us or email to book your beauty experience.`}
        />
        <meta property="og:image" content={ogImageUrl} />{" "}
        {/* Update with your image */}
        <meta
          property="og:image:alt"
          content="Shine Beauty NYC Contact Information and Map"
        />
        <meta property="og:site_name" content="Shine Beauty NYC" />
        <meta property="og:locale" content="en_US" />
        {/* --- Twitter Card Meta Tags --- */}
        <meta name="twitter:card" content="summary_large_image" />{" "}
        {/* Use "summary" if your OG image is small */}
        <meta name="twitter:url" content={pageUrl} />
        <meta
          name="twitter:title"
          content="Contact Us | Shine Beauty NYC - Get In Touch"
        />
        <meta
          name="twitter:description"
          content={`Contact Shine Beauty NYC for appointments and inquiries. Located at ${contactDetails.address}.`}
        />
        <meta name="twitter:image" content={ogImageUrl} />{" "}
        {/* Update with your image */}
        {/* --- Standard Meta Tags --- */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <motion.div
        style={styles.page}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Container>
          {/* HEADER SECTION */}
          <motion.div style={styles.headerContainer} variants={itemVariants}>
            <h1 style={styles.mainTitle}>Reach Out to Us</h1>
            <p style={styles.subTitle}>
              We're here to help you begin your journey to radiance. Get in
              touch to book your appointment or ask any questions.
            </p>
          </motion.div>

          <Row className="gy-5 align-items-stretch">
            {/* LEFT COLUMN: CONTACT CARDS */}
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

            {/* RIGHT COLUMN: MAP */}
            <Col lg={7}>
              <motion.div style={styles.mapWrapper} variants={itemVariants}>
                <iframe
                  src={contactDetails.embedMapLink}
                  style={styles.iframeStyle} // Apply specific styles to iframe
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shine Beauty NYC Location"
                ></iframe>
              </motion.div>
            </Col>
          </Row>

          {/* FINAL SLOGAN SECTION */}
          <motion.p style={styles.finalSlogan} variants={itemVariants}>
            "An Invitation to Radiance."
          </motion.p>
        </Container>
      </motion.div>
    </>
  );
};

export default Contact;
