import { useEffect } from 'react';
import Lenis from 'lenis';

let globalLenis = null;

export function useSmoothScroll() {
  useEffect(() => {
    globalLenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 1.2,
      infinite: false,
    });

    function raf(time) {
      if (globalLenis) {
        globalLenis.raf(time);
      }
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      if (globalLenis) {
        globalLenis.destroy();
        globalLenis = null;
      }
    };
  }, []);
}

export function scrollToSection(id) {
  if (globalLenis) {
    globalLenis.scrollTo(id, { offset: 0 }); // offset 0 because globals.css uses scroll-margin-top
  } else {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
