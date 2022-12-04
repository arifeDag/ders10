import { useEffect } from "react";
import { useState } from "react";

function App({renk}) {
  const [sayac, sayacGuncelle] = useState(0);

  useEffect(() => {
    document.title = sayac + "kere adım atıldı..." 
  }, [sayac] );

  function arttir() {
    sayacGuncelle((oncekiDeger) => oncekiDeger + 1);
  }
  return (
    <>
      <p>Adım Sayısı:{sayac}</p>
      <button onClick={arttir}>+</button>
      <p>{renk}</p>
    </>
  );
}
export default App;
