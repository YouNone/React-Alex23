import CostForm from "./CostForm";
import styles from "./NewCost.module.css";

function NewCost(props) {
  const saveCostDataHandler = (inputCostData) => {
    props.onAddCost(inputCostData);
  };

  const savePatchedCostDataHandler = (inputCostData) => {
    props.onPatchCost(inputCostData);
  };

  return (
    <div className={styles["new-cost"]}>
      <CostForm
        onSaveNewCostData={saveCostDataHandler}
        onSavePatchedCostData={savePatchedCostDataHandler}
        costToUpdate={props.costToUpdate}
      />
    </div>
  );
}

export default NewCost;
