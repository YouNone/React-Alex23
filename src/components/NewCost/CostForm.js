import { useState } from "react";
import "./CostForm.css"

function CostForm() {

    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

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
    }

    const AmountChangeHandler = (event) => {
        setInputAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value
        // })
    }

    const DateChangeHandler = (event) => {
        setInputDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     date: event.target.value
        // })
    }

    const SubmitHandler = (event) => {
        event.preventDefault();
        const costData = {
            name: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        }
        console.log(costData);
        setInputName("");
        setInputAmount("");
        setInputDate("");
    };

    return (
        <form onSubmit={SubmitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Name</label>
                    <input onChange={NameChangeHandler} value={inputName} type="text"/>
                </div>
                <div className="new-cost__control">
                    <label>Cost</label>
                    <input onChange={AmountChangeHandler} value={inputAmount} type="number" min="0.01" step="0.01" />
                </div> 
                <div className="new-cost__control">
                    <label>Date</label>
                    <input onChange={DateChangeHandler} value={inputDate} type="date" min="21-01-01" step="2023-12-31" />
                </div>  
            </div>
            <div className="new-cost__actions">
                <button type="submit">Add expense</button>
            </div>
        </form>
    )
}
export default CostForm;