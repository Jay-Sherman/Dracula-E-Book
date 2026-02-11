window.addEventListener('scroll', function() {
  // Save the vertical scroll position regularly
  localStorage.setItem('scrollPosition', window.scrollY);
});

window.addEventListener('load', function() {
  const savedPosition = localStorage.getItem('scrollPosition');
  if (savedPosition) {
    // Scroll to the saved position after the page loads
    window.scrollTo(0, savedPosition);
    // Optional: Remove the item once used, or keep it to restore on subsequent visits
    // localStorage.removeItem('scrollPosition');
  }
});