// site scroller to position from props
export const scrollSiteTo = (customPosition) => {
    const currentPosition = window.scrollY;
    const targetPosition = customPosition;
    const duration = 300;
    const startTime = performance.now();
  
    function scrollToPosition(timestamp) {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
  
      const newPosition = currentPosition + (targetPosition - currentPosition) * progress;
      window.scrollTo(0, newPosition);
  
      if (progress < 1) {
        requestAnimationFrame(scrollToPosition);
      };
    };
  
    requestAnimationFrame(scrollToPosition);
}
