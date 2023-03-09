import styles from "./CostDate.module.css";
const CostDate = (props) => {
  const month = new Date(props.date).toLocaleString("en-EN", { month: "long" });
  const day = new Date(props.date).toLocaleString("en-EN", { day: "2-digit" });
  const year = new Date(props.date).getFullYear();

  return (
    <div className={styles["cost-date"]}>
      <div className={styles["cost-date__month"]}>{month}</div>
      <div className={styles["cost-date__year"]}>{year}</div>
      <div className={styles["cost-date__day"]}>{day}</div>
    </div>
  );
};

export default CostDate;
