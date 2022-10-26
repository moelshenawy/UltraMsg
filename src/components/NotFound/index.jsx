import React from "react";
import Footer from "../../Layout/Footer-blog/Footer";
import Navbar from "./../Navbar/Navbar";

const index = () => {
  return (
    <>
      <Navbar />
      <div className="landing d-flex vh-100 justify-content-center align-items-center">
        <h1 className="landing-text text-center text-light">
          Page Not Found !!
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default index;
