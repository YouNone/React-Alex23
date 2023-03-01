import CostItem from "./CostItem";
import "./CostList.css";

function CostList(props) {
  if (props.costs.length === 0) {
    return <h2 className="cost-list__fallback"> No purchases this year</h2>;
  }
  const passDataForUpdateHandler = (deletedId) => {
    props.costDelete(deletedId);
  };

  const updateCostHandler = (cost) => {
    props.costUpdate(cost);
  };

  return (
    <ul className="cost-list">
      {props.costs.map((cost) => (
        <CostItem
          key={cost.id}
          id={cost.id}
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
          refreshAfterDelete={passDataForUpdateHandler}
          passEditItem={updateCostHandler}
        />
      ))}
    </ul>
  );
}
export default CostList;
