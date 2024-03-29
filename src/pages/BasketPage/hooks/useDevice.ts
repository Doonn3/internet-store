import { useEffect, useState } from "react";

export function useDevice(value: number) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < value);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < value);

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, [isMobile]);

  return {
    isMobile,
  };
}
