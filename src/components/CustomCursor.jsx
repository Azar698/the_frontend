import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursor);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y + "px",
        left: position.x + "px",
        width: "20px",
        height: "20px",
        backgroundColor: "rgba(255, 255, 255, 0.7)", // Change color as needed
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        transition: "transform 0.1s ease-out",
        zIndex: 9999,
      }}
    />
  );
};

export default CustomCursor;