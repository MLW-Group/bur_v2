"use client";
import { useState, useEffect } from "react";

function Resize() {
  const [width, setWidth] = useState<number>();
  console.log("🚀 ~ Resize ~ width:", width);

  const handleResize = () => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      return handleResize();
    }
    return handleResize();
  }, []);

  return { width };
}

export default Resize;
