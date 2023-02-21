import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
const costs = [
  {
    date: new Date(2021, 2, 12),
    description: "Fridge",
    amount: 999.99
  },
  {
    date: new Date(2021, 3, 1),
    description: "Laptop",
    amount: 1200
  },
  {
    date: new Date(2021, 11, 11),
    description: "Jeans",
    amount: 49.99
  }
];
function App() {
  return (
    <div>
     <NewCost></NewCost>
     <Costs costs={costs} />
    </div>
  );
}

export default App;
