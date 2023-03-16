import React from "react";
import CostItem from "./CostItem";
import styles from "./CostList.module.css";

function CostList(props) {
  if (props.costs.length === 0) {
    return (
      <h2 className={styles["cost-list__fallback"]}> No purchases this year</h2>
    );
  }
  const passDataForUpdateHandler = (deletedId) => {
    props.costDelete(deletedId);
  };

  const updateCostHandler = (cost) => {
    props.costUpdate(cost);
  };

  const clearInputsHandler = (flag) => {
    props.costClear(flag);
  };

  return (
    <ul className={styles["cost-list"]}>
      {props.costs.map((cost) => (
        <CostItem
          key={cost.id}
          id={cost.id}
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
          refreshAfterDelete={passDataForUpdateHandler}
          clearInputs={clearInputsHandler}
          passEditItem={updateCostHandler}
        />
      ))}
    </ul>
  );
}
export default CostList;
