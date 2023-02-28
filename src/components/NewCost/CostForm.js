import { useState } from "react";
import "./CostForm.css";
import { v4 as uuidv4 } from "uuid";

function CostForm(props) {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [isPending, setPending] = useState(false);

  const [inputIsOpened, setInputIsOpened] = useState(false);

  //    const [userInput, setUserInput] = useState({
  //         name: "",
  //         amount: "",
  //         date: ""
  //     })

  const NameChangeHandler = (event) => {
    setInputName(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     name: event.target.value
    // })
    // get acutal 'fresh' pervious state
    // setUserInput((prevState) => {
    //     return {
    //         ...prevState,
    //         name: event.target.value
    //     }
    // });
  };

  const AmountChangeHandler = (event) => {
    setInputAmount(event.target.value);
  };

  const DateChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
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
      console.log("new cost added", costData);
      setPending(false);
    });
    props.onSaveNewCostData(costData);
    setInputName("");
    setInputAmount("");
    setInputDate("");
    setInputIsOpened(false);
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
              min="21-01-01"
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
