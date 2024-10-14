import React from "react";
import Header from "../layouts/Header";
import LeftSide from "../layouts/LeftSide";
import Footer from "../layouts/Footer";

const PublicLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <LeftSide />
      <div className="w-full min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow h-full">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default PublicLayout;
