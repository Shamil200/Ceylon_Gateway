import React from "react";
import "./App.css";
import FooterCeylonGateway from './components/FooterCeylonGateway';
import BannerCeylonGateway from "./components/BannerCeylonGateway";
import TopNavigationMenuCeylonGateway from "./components/TopNavigationMenuCeylonGateway";
import AboutUsCeylonGateway from "./components/AboutUsCeylonGateway";

function App() {
  return (
    <div>
      <TopNavigationMenuCeylonGateway />
      <BannerCeylonGateway />
      <AboutUsCeylonGateway />
      <FooterCeylonGateway />
      <br/>
    </div>
  );
}

export default App;
