import styles from "./Costs.module.css";
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

  const costUpdateHandler = (costToUpdate) => {
    props.dataUpdate(costToUpdate);
  };

  const costClearHandler = (flag) => {
    props.clearCostInp(flag);
  };

  return (
    <div>
      <Card className={styles["costs"]}>
        <CostsFilter year={selectedYear} onChangeYear={onChangeYearHandler} />
        <CostsDiagram costs={filteredCosts} />
        <CostList
          costs={filteredCosts}
          costUpdate={costUpdateHandler}
          costClear={costClearHandler}
        />
      </Card>
    </div>
  );
};

export default Costs;
