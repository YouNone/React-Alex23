import React, { useContext } from "react";
import ConstContext from "../context/CostContext";
import Card from "../UI/Card";
import CostDate from "./CostDate";
import styles from "./CostItem.module.css";

const CostItem = (props) => {
  const ctx = useContext(ConstContext);
  const onDeleteHandler = () => {
    fetch("http://localhost:8000/costs/" + props.id, {
      method: "DELETE",
    }).then(() => {
      ctx.deleteCostHandler(props.id);
      ctx.clearCostHandler(true);
    });
  };

  const editCostHandler = () => {
    ctx.updateDataHandler(props);
  };

  return (
    <li>
      <Card className={styles["cost-item"]}>
        <CostDate date={props.date} />
        <div className={styles["cost-item__description"]}>
          <h2>{props.description}</h2>
          <div className={styles["cost-item__price"]}>${props.amount}</div>
        </div>
        <div>
          <button
            type="button"
            onClick={editCostHandler}
            className={styles["edit-button"]}
          >
            Edit
          </button>

          <button
            type="button"
            onClick={onDeleteHandler}
            className={styles["delete-button"]}
          >
            Delete
          </button>
        </div>
      </Card>
    </li>
  );
};
export default CostItem;
