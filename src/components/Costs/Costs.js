import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import { useState } from "react";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

const Costs = (props) => {
  const [selectedYear, setYear] = useState("2023");
  const filteredCosts = props.costs.filter((cost) => {
    return new Date(cost.date).getFullYear().toString() === selectedYear;
  });
  const onChangeYearHandler = (inputYearChangeData) => {
    setYear(inputYearChangeData);
  };

  //  forth solution, final
  // Part third ternat solution before return
  // let costContent = filteredCosts.length === 0 ? <p>No purchases this year</p> : filteredCosts.map(cost =>
  //     <CostItem
  //         key={cost.id}
  //         date={cost.date}
  //         description={cost.description}
  //         amount={cost.amount}
  //     />
  // );

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={onChangeYearHandler} />
        <CostsDiagram costs={filteredCosts} />

        {/*!! frist hard to read code */}

        {/* {filteredCosts.length === 0 && <p>No purchases this year </p>} 
            {filteredCosts.length > 0 && filteredCosts.map(cost =>
                <CostItem 
                    key={cost.id} 
                    date={cost.date} 
                    description={cost.description}
                    amount={cost.amount}
                />
                )
            } */}

        {/*!! second variant of the same code */}

        {/* {
                filteredCosts.length === 0 ? costContent : filteredCosts.map(cost =>
                    <CostItem 
                        key={cost.id} 
                        date={cost.date} 
                        description={cost.description}
                        amount={cost.amount}
                    />
                )
            } */}

        {/* third/ forth solution */}
        {/* {costContent} */}
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
};

export default Costs;
