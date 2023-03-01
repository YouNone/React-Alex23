import CostForm from "./CostForm";
import "./NewCost.css";

function NewCost(props) {
  // const [costToUpdate, setCostToUpdate] = useState(props.costToUpdate);
  // if (props.costToUpdate !== null) {
  //   setCostToUpdate(props.costToUpdate);
  // }
  // console.log(props.costToUpdate);

  const saveCostDataHandler = (inputCostData) => {
    props.onAddCost(inputCostData);
  };

  return (
    <div className="new-cost">
      <CostForm
        onSaveNewCostData={saveCostDataHandler}
        costToUpdate={props.costToUpdate}
      />
    </div>
  );
}

export default NewCost;
