import React from "react";
import {Link} from "react-router-dom";

const Navlinks = () => {
  return (
    <ul className="flex list-none">
      <li className="mr-4"><Link to="/">Home</Link></li>
      <li className="mr-4"><Link to="/availability">Availability</Link></li>
    </ul>
  );
};

export default Navlinks;
