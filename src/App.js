import CostItem from "./components/CostItem";
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
     <h1>Hello world</h1>
     <CostItem date={costs[0].date} description={costs[0].description} amount={costs[0].amount} />
     <CostItem date={costs[1].date} description={costs[1].description} amount={costs[1].amount} />
     <CostItem date={costs[2].date} description={costs[2].description} amount={costs[2].amount} />
    </div>
  );
}

export default App;
