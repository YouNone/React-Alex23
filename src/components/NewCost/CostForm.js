import { useEffect, useState } from "react";
import "./CostForm.css";
import { v4 as uuidv4 } from "uuid";

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

function CostForm(props) {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [isPending, setPending] = useState(false);
  const [inputIsOpened, setInputIsOpened] = useState(false);

  const curDate = new Date().toJSON().slice(0, 10);

  useEffect(() => {
    if (props.costToUpdate) {
      console.log(props.costToUpdate);
      setInputName(props.costToUpdate.description);
      setInputAmount(props.costToUpdate.amount);
      setInputDate(formatDate(props.costToUpdate.date));
      setInputIsOpened(true);
    }
  }, [props.costToUpdate]);

  const NameChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const AmountChangeHandler = (event) => {
    setInputAmount(event.target.value);
  };

  const DateChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    if (props.costToUpdate) {
      const costData = {
        description: inputName,
        amount: inputAmount,
        date: new Date(inputDate),
        id: props.costToUpdate.id,
      };

      setPending(true);
      fetch("http://localhost:8000/costs/" + props.costToUpdate.id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(costData),
      }).then(() => {
        console.log("PATCH", costData);
        setPending(false);
      });
      // props.onSaveNewCostData(costData);
      setInputName("");
      setInputAmount("");
      setInputDate("");
      setInputIsOpened(false);
    } else {
      const costData = {
        description: inputName,
        amount: inputAmount,
        date: new Date(inputDate),
        id: uuidv4(),
      };

      setPending(true);

      fetch("http://localhost:8000/costs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(costData),
      }).then(() => {
        console.log("POST", costData);
        setPending(false);
      });
      props.onSaveNewCostData(costData);
      setInputName("");
      setInputAmount("");
      setInputDate("");
      setInputIsOpened(false);
    }
  };

  const CancelHandler = () => {
    setInputName("");
    setInputAmount("");
    setInputDate("");
    setInputIsOpened(false);
  };

  const AddNewExpenseHandler = () => {
    setInputIsOpened(true);
  };
  if (inputIsOpened) {
    return (
      <form onSubmit={SubmitHandler}>
        <div className="new-cost__controls">
          <div className="new-cost__control">
            <label>Name</label>
            <input onChange={NameChangeHandler} value={inputName} type="text" />
          </div>
          <div className="new-cost__control">
            <label>Cost</label>
            <input
              onChange={AmountChangeHandler}
              value={inputAmount}
              type="number"
              min="0.01"
              step="0.01"
            />
          </div>
          <div className="new-cost__control">
            <label>Date</label>
            <input
              onChange={DateChangeHandler}
              value={inputDate}
              type="date"
              min="2020-12-31"
              max={curDate}
              step="2023-12-31"
            />
          </div>
        </div>
        <div className="new-cost__actions">
          {!isPending && <button type="submit">Add expense</button>}
          {isPending && (
            <button type="submit" disabled>
              Adding expense...
            </button>
          )}

          <button type="button" onClick={CancelHandler} value={inputIsOpened}>
            Cancel
          </button>
        </div>
      </form>
    );
  }

  return (
    <div>
      <button type="button" onClick={AddNewExpenseHandler}>
        Add new expense
      </button>
    </div>
  );
}
export default CostForm;
