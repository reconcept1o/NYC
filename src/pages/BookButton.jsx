import React from "react";
import { Button as BootstrapButton } from "react-bootstrap";
import { motion } from "framer-motion";

const MotionButton = motion(BootstrapButton);

const BookButton = ({ href, target, rel }) => {
  // --- STİLLER ---
  const buttonStyle = {
    borderColor: "#1E8449",
    color: "#1E8449",
    borderRadius: "30px",
    fontWeight: 700,
    fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
    padding: "10px 35px",
    borderWidth: "2px",
    fontFamily: "'Poppins', sans-serif",
  };

  const buttonHoverStyle = {
    backgroundColor: "#1E8449",
    color: "white",
  };

  return (
    <MotionButton
      as="a"
      href={href}
      target={target}
      rel={rel}
      variant="outline-success"
      style={buttonStyle}
      whileHover={{ ...buttonHoverStyle, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Book Now
    </MotionButton>
  );
};

export default BookButton;
