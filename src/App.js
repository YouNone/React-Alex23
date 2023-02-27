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
    // console.log(cost, "app comp");
  };

  useEffect(() => {
    // console.log("useEffect hook");
    fetch("http://localhost:8000/costs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setCosts(data);
      });
  }, []);

  return (
    <div>
      {costs && <NewCost onAddCost={addCostHandler}></NewCost>}
      {costs && <Costs costs={costs} />}
    </div>
  );
}

export default App;
