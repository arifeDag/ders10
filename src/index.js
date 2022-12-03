import React from "react";
import ReactDOM from "react-dom/client";

function Bilesen({KutuNo}) {
  let sayi = KutuNo
  return(
    <>
    <p>Hangi kutu ?</p>
    {sayi=== 2 ?<Kutu2/> : <Kutu1/>};
    </>
    )
}
function Kutu1(){
  return "Ben kutu 1'im "
}
function Kutu2() {
  return "Ben kutu 2'yim"
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Bilesen KutuNo={2}></Bilesen>
);
