import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => {
  return (
    <>
      <h1>Zvířátka v ZOO</h1>

      <div className="container">
        {/* zde budou jednotlivé komponenty */}
      </div>
    </>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
