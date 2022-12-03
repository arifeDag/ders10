import React from 'react';
import ReactDOM from 'react-dom/client';

 function Kart(ozellikler) {
  return <p>Merhaba {ozellikler.children}</p>
 }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Kart renk="Kirmizi">
  <span>!</span>
 </Kart>
);


