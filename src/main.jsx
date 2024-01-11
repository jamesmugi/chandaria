import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
// import "./assets/fontawesome/css/all.css";
import "./assets/css/style.scss";
import ScrollToTop from "./utils/ScrollToTop.js";
// import "./assets/js/jquery.js";
// import "./assets/js/lightbox-plus-jquery.min.js";
// import "./assets/css/lightbox.css";

// Default theme
import "@splidejs/react-splide/css";
// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
// or only core styles
import "@splidejs/react-splide/css/core";

//Add Font Awesome to Portal
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
const script = document.createElement("script");
script.src = "https://kit.fontawesome.com/656066eede.js";
script.crossOrigin = "anonymous";
document.body.appendChild(script);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
