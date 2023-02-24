import { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id: 1,
    date: new Date(2022, 2, 12),
    description: "Fridge",
    amount: 999.99,
  },
  {
    id: 2,
    date: new Date(2021, 3, 1),
    description: "Laptop",
    amount: 1200,
  },
  {
    id: 3,
    date: new Date(2020, 11, 11),
    description: "Jeans",
    amount: 49.99,
  },
  {
    id: 4,
    date: new Date(2020, 1, 11),
    description: "Gloves",
    amount: 30,
  },
  {
    id: 5,
    date: new Date(2023, 3, 1),
    description: "Hat",
    amount: 200,
  },
];

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);
  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
    // console.log(cost, "app comp");
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler}></NewCost>
      <Costs costs={costs} />
    </div>
  );
}

export default App;
