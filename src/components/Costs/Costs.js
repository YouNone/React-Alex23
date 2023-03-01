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

  const costDeleteHandler = (incomeId) => {
    props.dataDelete(incomeId);
  };

  const costUpdateHandler = (costToUpdate) => {
    props.dataUpdate(costToUpdate);
  };

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={onChangeYearHandler} />
        <CostsDiagram costs={filteredCosts} />
        <CostList
          costs={filteredCosts}
          costDelete={costDeleteHandler}
          costUpdate={costUpdateHandler}
        />
      </Card>
    </div>
  );
};

export default Costs;
