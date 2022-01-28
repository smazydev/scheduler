import React from "react";
import Logo from "../Logo";
import Navlinks from "../Navlinks";

const Navigation = () => {
  return <div className="container mt-2 pb-2 mx-auto flex justify-around items-center border-b border-b-grey-500">
      <Logo/>
      <Navlinks />
  </div>;
};

export default Navigation;
