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
        inputPass={props.isInputClear}
        onSaveNewCostData={saveCostDataHandler}
        onSavePatchedCostData={savePatchedCostDataHandler}
        costToUpdate={props.costToUpdate}
        clearFields={props.isInputClear}
      />
    </div>
  );
}

export default NewCost;
