document.addEventListener('DOMContentLoaded', () => {
  const backgroundElements = document.querySelectorAll('.background-elements > *');
  
  backgroundElements.forEach(element => {
      element.style.transition = 'transform 0.3s ease';
  });

  document.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const moveX = (clientX - centerX) / centerX;
      const moveY = (clientY - centerY) / centerY;
      
      backgroundElements.forEach(element => {
          const depth = parseFloat(element.dataset.depth) || 0.1;
          const translateX = moveX * 50 * depth;
          const translateY = moveY * 50 * depth;
          
          element.style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
  });
});

