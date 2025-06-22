import React from "react";
import ReactDOM from "react-dom/client"; // React 18+ için
// import ReactDOM from 'react-dom'; // React < 18 için
import App from "./App"; // Ana App bileşeniniz
import { HelmetProvider } from "react-helmet-async"; // HelmetProvider'ı import edin
import "bootstrap/dist/css/bootstrap.min.css"; // Eğer Bootstrap CSS'i global olarak kullanıyorsanız
import "./index.css"; // Global stilleriniz

// React 18+ için
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
 
      <App />
    </HelmetProvider>{" "}
  
  </React.StrictMode>
);
