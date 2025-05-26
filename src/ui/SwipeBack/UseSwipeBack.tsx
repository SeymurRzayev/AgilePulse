import { useEffect } from 'react';

export const useSwipeBack = (): void => {
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent): void => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent): void => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX > touchStartX + 100) {
        window.history.back();
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);
};
// This hook listens for swipe gestures on touch devices and navigates back in history when a swipe to the right is detected.
