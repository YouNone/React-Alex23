import CostForm from "./CostForm";
import "./NewCost.css";

function NewCost(props) {
  const saveCostDataHandler = (inputCostData) => {
    props.onAddCost(inputCostData);
  };

  const savePatchedCostDataHandler = (inputCostData) => {
    props.onPatchCost(inputCostData);
  };

  return (
    <div className="new-cost">
      <CostForm
        onSaveNewCostData={saveCostDataHandler}
        onSavePatchedCostData={savePatchedCostDataHandler}
        costToUpdate={props.costToUpdate}
      />
    </div>
  );
}

export default NewCost;
