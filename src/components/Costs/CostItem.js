import Card from "../UI/Card";
import CostDate from "./CostDate";
import styles from "./CostItem.module.css";

const CostItem = (props) => {
  const onDeleteHandler = () => {
    fetch("http://localhost:8000/costs/" + props.id, {
      method: "DELETE",
    }).then(() => {
      props.refreshAfterDelete(props.id);
    });
  };

  const editCostHandler = () => {
    props.passEditItem(props);
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
