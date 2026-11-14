import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); 
    }, 2000);

    return () => clearTimeout(timer);
  }, []); 

  return React.createElement(
    'div',
    { className: 'container' },

    isVisible ? React.createElement(
      'div',
      { className: 'hello-box' },
      'Hello'
    ) : null,
  );
}

export default App;