import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import HelloBar from "./HelloBar";

const WithMainLayout = (Component) => {
  return () => (
    <>
      <HelloBar />
      <Header />

      <Component />

      <Footer />
    </>
  );
};

export default WithMainLayout;
