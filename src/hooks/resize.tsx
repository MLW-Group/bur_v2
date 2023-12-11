"use client";
import { useState, useEffect } from "react";

function Resize() {
  const [width, setWidth] = useState<number>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return { width };
}

export default Resize;
