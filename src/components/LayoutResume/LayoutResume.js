import React from "react";
import "../LayoutResume/Layout.css";
import AboutMe from "./AboutMe";
import InfoLeft from "./InfoLeft";

function Layout() {
  return (
    <>
      <div className="main_container">
        <div className="left_container"><InfoLeft/></div>
        <div className="right_container"><AboutMe/></div>
      </div>
    </>
  );
}

export default Layout;
