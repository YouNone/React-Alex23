import React from "react";

const ConstContext = React.createContext({
  // Cost
  deleteCostHandler: () => {},
  updateDataHandler: () => {},
  clearCostHandler: () => {},
  costs: [],
  // NewCost
  addCostHandler: () => {},
  patchCostHandler: () => {},
});
export default ConstContext;
