import { useEffect, useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

// npx json-server --watch data/db.json --port 8000
function App() {
  const [costs, setCosts] = useState(null);
  const [costToUpdate, setCostToUpdate] = useState(null);

  // let foundIndex = prevCosts.findIndex((x) => x.id === cost.id);
  // prevCosts[foundIndex] = cost;
  // console.log(prevCosts);
  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
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
    // console.log(cost);
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
          costToUpdate={costToUpdate}
        ></NewCost>
      )}
      {costs && (
        <Costs
          costs={costs}
          dataDelete={updateListHandler}
          dataUpdate={updateDataHandler}
        />
      )}
    </div>
  );
}

export default App;
