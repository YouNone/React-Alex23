import { useEffect, useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

// npx json-server --watch data/db.json --port 8000
function App() {
  const [costs, setCosts] = useState(null);
  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  const updateListHandler = (itemId) => {
    setCosts((prevCosts) => {
      // console.log(deletedCost, prevCosts);
      let res = prevCosts.filter((cost) => cost.id !== itemId);
      // console.log("res - ", res);
      // console.log("itemId - ", itemId);
      // console.log("prevCosts -", prevCosts);
      return [...res];
      // return [prevCosts.filter((cost) => cost.id !== deletedCost.id)];
      // return [clearCosts, ...prevCosts];
    });
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
      {costs && <NewCost onAddCost={addCostHandler}></NewCost>}
      {costs && <Costs costs={costs} dataUpdate={updateListHandler} />}
    </div>
  );
}

export default App;
