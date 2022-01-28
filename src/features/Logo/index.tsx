import React from "react";
import logoPath from "../../logo.svg";
import styles from "./logo.module.css";

const Logo = () => {
  return <img className="w-10 h-10 inline-block" src={logoPath} alt="react-logo" />;
};

export default Logo;
