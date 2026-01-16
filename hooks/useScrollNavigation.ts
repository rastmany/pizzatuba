import { useState, useEffect } from 'react';

interface ScrollNavigationState {
  isCompactMode: boolean;
  scrollY: number;
}

/**
 * Custom hook to manage scroll-based navigation integration
 * Detects when Header reaches StickyNav position and triggers compact mode
 */
export const useScrollNavigation = (): ScrollNavigationState => {
  const [isCompactMode, setIsCompactMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Get the sticky nav element position
      const stickyNav = document.getElementById('sticky-nav');
      if (stickyNav) {
        const stickyNavTop = stickyNav.getBoundingClientRect().top;
        const headerHeight = 80; // Header height in pixels

        // Activate compact mode when header overlaps with sticky nav
        setIsCompactMode(stickyNavTop <= headerHeight);
      }
    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isCompactMode, scrollY };
};
