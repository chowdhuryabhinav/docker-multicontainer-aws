import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      I'm in some other page!
      <Link to="/">Go Back home</Link>
    </div>
  );
};
