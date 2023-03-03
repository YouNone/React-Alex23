import Card from "../UI/Card";
import CostDate from "./CostDate";
import "./CostItem.css";

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
      <Card className="cost-item">
        <CostDate date={props.date} />
        <div className="cost-item__description">
          <h2>{props.description}</h2>
          <div className="cost-item__price">${props.amount}</div>
        </div>
        <div>
          <button
            type="button"
            onClick={editCostHandler}
            className="edit-button"
          >
            Edit
          </button>

          <button
            type="button"
            onClick={onDeleteHandler}
            className="delete-button"
          >
            Delete
          </button>
        </div>
      </Card>
    </li>
  );
};
export default CostItem;
