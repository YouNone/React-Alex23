import { useEffect, useState } from "react";
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

  const updateListHandler = (itemId) => {
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
        <Costs
          costs={costs}
          dataDelete={updateListHandler}
          dataUpdate={updateDataHandler}
          clearCostPass={clearCostHandler}
        />
      )}
    </div>
  );
}

export default App;
