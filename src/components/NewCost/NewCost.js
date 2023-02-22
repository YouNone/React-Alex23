import CostForm from "./CostForm";
import "./NewCost.css"

function NewCost(props) {
    const saveCostDataHandler = (inputCostData) => {
        // const costData = {
        //     ...inputCostData,
        // }
        props.onAddCost(inputCostData)
    };

    return (
        <div className="new-cost">
            <CostForm onSaveNewCostData={saveCostDataHandler} />
        </div>
    )
}

export default NewCost;