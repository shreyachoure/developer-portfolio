import React from "react";
import "./Footer.css";
import "../../App.css";

const Footer = () => {
  return (
    <footer class="container-fluid footer text-center mt-5">{`Developed in ${new Date().getFullYear()} by Shreya Choure`}</footer>
  );
};

export default Footer;
