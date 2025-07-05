import React from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/917829401605" 
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "9999",
      }}
    >
      <img
        src="/assets/img/img.icons8.png" 
        alt="WhatsApp"
        style={{
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      />
    </a>
  );
};

export default WhatsAppButton;
