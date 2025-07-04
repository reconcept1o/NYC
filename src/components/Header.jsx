import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import BookButton from "../pages/BookButton";

import LeafIcon from "../assets/leaf101.webp";

// --- DEĞİŞİKLİK BURADA ---
// Yeni link diziye eklendi.
const navLinks = [
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Products & Certs", path: "/prodandcert" }, // YENİ LİNK
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Animasyon Varyantları ve Stiller (Değişiklik yok)
  const brandContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
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
  const leafVariant = {
    hidden: { opacity: 0, scale: 0.5, rotate: -90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 15,
      transition: { type: "spring", damping: 12, stiffness: 100, delay: 0.7 },
    },
  };
  const navbarStyle = {
    background: "#ffffff",
    height: "80px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    fontFamily: "'Cormorant Garamond', serif",
    transition: "transform 0.3s ease-in-out",
    transform: isVisible ? "translateY(0)" : "translateY(-100%)",
    position: "fixed",
    width: "100%",
    zIndex: 1000,
  };
  const brandContainerStyle = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    paddingRight: isMobile ? "1.8rem" : "2.8rem",
  };
  const brandTextStyle = {
    color: "#5A7504",
    fontSize: isMobile ? "1.6rem" : "2.2rem",
    fontWeight: 900,
    display: "inline-block",
  };
  const leafStyle = {
    position: "absolute",
    top: isMobile ? "-6px" : "-10px",
    right: -38,
    height: isMobile ? "2.5rem" : "3.3rem",
    width: "auto",
    transform: "rotate(15deg)",
    marginLeft: 0,
  };
  const navLinkStyle = {
    position: "relative",
    padding: "0.5rem 1rem",
    color: "#333",
    fontWeight: 900,
    fontSize: "1.2rem",
    transition: "color 0.3s ease",
  };
  // --- Bitiş: Animasyon ve Stiller ---

  const bookingUrl =
    "https://www.fresha.com/a/shine-beauty-nyc-new-york-315-west-57th-street-nyfwijkc/booking";
  const text = "Shine Beauty NYC";

  return (
    <Navbar
      bg="transparent"
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      style={navbarStyle}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={brandContainerVariants}
            style={brandContainerStyle}
          >
            {Array.from(text).map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                style={{ ...brandTextStyle, whiteSpace: "pre" }}
              >
                {letter}
              </motion.span>
            ))}
            <motion.img
              src={LeafIcon}
              alt="Shine Beauty NYC Leaf"
              style={leafStyle}
              variants={leafVariant}
            />
          </motion.div>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ border: "none" }}
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Nav.Link
                  key={link.name}
                  as={NavLink}
                  to={link.path}
                  style={navLinkStyle}
                  className="nav-link-hover"
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      style={{
                        position: "absolute",
                        bottom: -5,
                        left: "1rem",
                        right: "1rem",
                        height: "2px",
                        background: "#1E8449",
                        borderRadius: "2px",
                      }}
                    />
                  )}
                </Nav.Link>
              );
            })}
            <div className="ms-lg-3 mt-2 mt-lg-0">
              <BookButton href={bookingUrl}>Book Now</BookButton>
            </div>
          </Nav>
        </Navbar.Collapse>

        <Offcanvas
          show={expanded}
          onHide={() => setExpanded(false)}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              style={{
                color: "#1E8449",
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
              }}
            >
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="d-flex flex-column">
            <Nav
              className="flex-column"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {navLinks.map((link) => (
                <Nav.Link
                  as={NavLink}
                  to={link.path}
                  key={link.name}
                  onClick={() => setExpanded(false)}
                  className="py-2 fs-4 text-dark"
                  style={{ fontWeight: 600 }}
                >
                  {link.name}
                </Nav.Link>
              ))}
            </Nav>
            <BookButton
              href={bookingUrl}
              variant="success"
              className="w-100 mt-auto"
              style={{ fontSize: "1.2rem", padding: "0.75rem" }}
            >
              Book Now
            </BookButton>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
