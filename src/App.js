import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const costs = [
  {
    date: new Date(2022, 2, 12),
    description: "Fridge",
    amount: 999.99
  },
  {
    date: new Date(2021, 3, 1),
    description: "Laptop",
    amount: 1200
  },
  {
    date: new Date(2020, 11, 11),
    description: "Jeans",
    amount: 49.99
  }
];

function App() {

  const addCostHandler = (newCost) => {
    console.log(newCost, "app comp");
  }

  return (
    <div>
        <NewCost onAddCost={addCostHandler}></NewCost>
        <Costs costs={costs} />
    </div>
  );
}

export default App;
