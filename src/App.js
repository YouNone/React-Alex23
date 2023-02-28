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

  const updateListHandler = (clearCosts) => {
    setCosts(clearCosts);
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
