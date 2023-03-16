import React from "react";

const ConstContext = React.createContext({
  deleteCostHandler: () => {},
  updateDataHandler: () => {},
  clearCostInp: () => {},
});
export default ConstContext;
