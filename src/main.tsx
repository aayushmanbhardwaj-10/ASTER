import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      {/* Skip links for accessibility */}
      <div className="skip-links">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <a href="#sidebar" className="skip-link">Skip to navigation</a>
        <a href="#footer" className="skip-link">Skip to footer</a>
      </div>
      <App />
    </>
  </StrictMode>
);
