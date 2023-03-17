import CostForm from "./CostForm";
import styles from "./NewCost.module.css";

function NewCost(props) {
  return (
    <div className={styles["new-cost"]}>
      <CostForm
        costToUpdate={props.costToUpdate}
        clearFields={props.isInputClear}
      />
    </div>
  );
}

export default NewCost;
