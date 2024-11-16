// src/components/Layout.js
import React from "react";
import Header from "./header";
import Footer from "./footer";
import ContentHomePage from "./ContentHomePage/ContentHomePage";
import Contact from "./Contact/Contact";

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <main>{children}</main>
      <ContentHomePage />
      <Contact />
      <Footer />
    </div>
  );
};

export default Layout;
