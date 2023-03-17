import React from "react";

const ConstContext = React.createContext({
  deleteCostHandler: () => {},
  updateDataHandler: () => {},
  clearCostHandler: () => {},
  costs: [],
});
export default ConstContext;
