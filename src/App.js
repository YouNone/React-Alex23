import React, { useEffect, useState } from "react";
import ConstContext from "./components/context/CostContext";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

// npx json-server --watch data/db.json --port 8000

function App() {
  const [costs, setCosts] = useState(null);
  const [costToUpdate, setCostToUpdate] = useState(null);
  const [inputFlag, setInputFlag] = useState(null);
  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  const patchCostHandler = (incomeCost) => {
    setCosts((prevCosts) => {
      let foundIndex = prevCosts.findIndex(
        (prevCost) => prevCost.id === incomeCost.id
      );
      costs[foundIndex] = incomeCost;
      return [costs, ...prevCosts];
    });
  };

  const deleteCostHandler = (itemId) => {
    setCosts((prevCosts) => {
      let res = prevCosts.filter((cost) => cost.id !== itemId);
      return [...res];
    });
  };

  const updateDataHandler = (cost) => {
    setCostToUpdate(cost);
  };

  const clearCostHandler = (flag) => {
    setInputFlag(flag);
  };

  useEffect(() => {
    fetch("http://localhost:8000/costs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCosts(data);
      });
  }, []);

  return (
    <div>
      {costs && (
        <NewCost
          onAddCost={addCostHandler}
          onPatchCost={patchCostHandler}
          costToUpdate={costToUpdate}
          isInputClear={inputFlag}
        ></NewCost>
      )}
      {costs && (
        <ConstContext.Provider value={{ deleteCostHandler }}>
          <Costs
            costs={costs}
            dataUpdate={updateDataHandler}
            clearCostInp={clearCostHandler}
          />
        </ConstContext.Provider>
      )}
    </div>
  );
}

export default App;
