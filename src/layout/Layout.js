import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";

function Layout(props) {
  return (
    <React.Fragment>
      <Header />
      <div className="layout__inner">
        {props.children}
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
