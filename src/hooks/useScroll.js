import { useState, useEffect } from "react";

export default function useScroll() {
  const [scroll, setScroll] = useState({
    scrollX: undefined,
    scrollY: undefined,
  });

  useEffect(() => {
    function handleScroll() {
      setScroll({
        scrollX: window.scrollX,
        scrollY: window.scrollY,
        width: window.innerWidth,
        scrollPosition: onScroll(),
      });
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scroll;
}

function onScroll() {
  const winScroll = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;

  return scrolled;
}
