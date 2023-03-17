import styles from "./Costs.module.css";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import { useContext, useState } from "react";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";
import ConstContext from "../context/CostContext";

const Costs = (props) => {
  const ctx = useContext(ConstContext);

  const [selectedYear, setYear] = useState("2023");
  const filteredCosts = ctx.costs.filter((cost) => {
    return new Date(cost.date).getFullYear().toString() === selectedYear;
  });

  const onChangeYearHandler = (inputYearChangeData) => {
    setYear(inputYearChangeData);
  };
  return (
    <div>
      <Card className={styles["costs"]}>
        <CostsFilter year={selectedYear} onChangeYear={onChangeYearHandler} />
        <CostsDiagram costs={filteredCosts} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
};

export default Costs;
