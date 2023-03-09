import { useEffect, useState } from "react";
import "./CostForm.css";
import { v4 as uuidv4 } from "uuid";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";

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
  const [error, setError] = useState(undefined);

  const curDate = new Date().toJSON().slice(0, 10);

  useEffect(() => {
    if (props.costToUpdate) {
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

  const ErrorHandler = () => {
    setError(false);
  };

  function sendCost() {
    if (props.costToUpdate && inputName && inputAmount && inputDate) {
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
      props.onSavePatchedCostData(costData);
      setInputName("");
      setInputAmount("");
      setInputDate("");
      setInputIsOpened(false);
    } else {
      if (inputName && inputAmount && inputDate) {
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
    }
  }

  function validateForm() {
    switch (true) {
      case inputName.trim().length === 0 &&
        inputAmount.trim().length === 0 &&
        inputDate.trim().length === 0:
        setError({
          title: "incorrect input: Empty form",
          message: "Form cannot be empty",
        });
        break;

      case inputName.trim().length === 0 && inputAmount.trim().length === 0:
        setError({
          title: "incorrect input: empty fields",
          message: "Form fields 'Name' & 'Cost' cannot be empty",
        });
        break;

      case inputAmount.trim().length === 0 && inputDate.trim().length === 0:
        setError({
          title: "incorrect input: empty fields",
          message: "Form fields 'Cost' & 'Date' cannot be empty",
        });
        break;

      case inputName.trim().length === 0 && inputDate.trim().length === 0:
        setError({
          title: "incorrect input: empty fields",
          message: "Form fields 'Name' & 'Date' cannot be empty",
        });
        break;

      case inputName.trim().length === 0:
        setError({
          title: "incorrect input: Fied 'Name' to short",
          message: "Fied 'Name' cannot be empty",
        });
        break;

      case inputDate.trim().length === 0:
        setError({
          title: "incorrect input: Fied 'Date' to short",
          message: "Fied 'Date' cannot be empty",
        });
        break;

      case inputAmount.trim().length === 0:
        setError({
          title: "incorrect input: Fied 'Cost' to short",
          message: "Fied 'Cost' cannot be empty",
        });
        break;

      case +inputAmount < 1:
        setError({
          title: "incorrect input",
          message: "Fied 'Amount' cannot be less than 1",
        });
        break;

      default:
        sendCost();
        // props.onSaveUser(inputName, inputAmount, uuidv4());
        // setInputName("");
        // setInputAge("");
        break;
    }
  }

  const SubmitHandler = (event) => {
    event.preventDefault();
    validateForm();
    // if (props.costToUpdate && inputName && inputAmount && inputDate) {
    //   const costData = {
    //     description: inputName,
    //     amount: inputAmount,
    //     date: new Date(inputDate),
    //     id: props.costToUpdate.id,
    //   };

    //   setPending(true);
    //   fetch("http://localhost:8000/costs/" + props.costToUpdate.id, {
    //     method: "PATCH",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(costData),
    //   }).then(() => {
    //     console.log("PATCH", costData);
    //     setPending(false);
    //   });
    //   props.onSavePatchedCostData(costData);
    //   setInputName("");
    //   setInputAmount("");
    //   setInputDate("");
    //   setInputIsOpened(false);
    // } else {
    //   if (inputName && inputAmount && inputDate) {
    //     const costData = {
    //       description: inputName,
    //       amount: inputAmount,
    //       date: new Date(inputDate),
    //       id: uuidv4(),
    //     };

    //     setPending(true);

    //     fetch("http://localhost:8000/costs", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify(costData),
    //     }).then(() => {
    //       console.log("POST", costData);
    //       setPending(false);
    //     });
    //     props.onSaveNewCostData(costData);
    //     setInputName("");
    //     setInputAmount("");
    //     setInputDate("");
    //     setInputIsOpened(false);
    //   }
    // }
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
      <div>
        {error && (
          <ErrorModal
            onCloseModal={ErrorHandler}
            title={error.title}
            message={error.message}
          />
        )}
        <form onSubmit={SubmitHandler}>
          <div className="new-cost__controls">
            <div className="new-cost__control">
              <label>Name</label>
              <input
                onChange={NameChangeHandler}
                value={inputName}
                type="text"
              />
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
                min="2020-1-1"
                max={curDate}
                step="2023-12-31"
              />
            </div>
          </div>
          <div className="new-cost__actions">
            {!isPending && <Button type="submit">Add expense</Button>}
            {isPending && (
              <Button type="submit" disabled>
                Adding expense...
              </Button>
            )}

            <Button type="button" onClick={CancelHandler} value={inputIsOpened}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
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
