/* los props es informacion que le pasamos 
al compomente padre y al hijo para que es 
tenga la informacion necesaria  para lo que 
vayamos a hacer */

import React from "react";

const Number = (props) => {
  return <div className="number">{props.value}</div>;
};

export default Number;
