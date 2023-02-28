import Card from "../UI/Card";
import CostDate from "./CostDate";
import "./CostItem.css";

const CostItem = (props) => {
  console.log(props);
  const onDeleteHandler = () => {
    fetch("http://localhost:8000/costs/" + props.id, {
      method: "DELETE",
    }).then(() => {
      // place to redirect mb
    });
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
