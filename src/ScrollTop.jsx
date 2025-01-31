import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollTop() {
  const location = useLocation(); // Track the current route location

  useEffect(() => {
    // Scroll to top whenever the route changes
    window.scrollTo(0, 0);
  }, [location]);

  return null; // This component doesn't render anything to the UI
}

export default ScrollTop;
