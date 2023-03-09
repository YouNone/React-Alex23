import styles from "./CostsFilter.module.css";

const CostsFilter = (props) => {
  const recentYears = [
    { value: 2023 },
    { value: 2022 },
    { value: 2021 },
    { value: 2020 },
  ];

  const yearChangeHandler = (event) => {
    props.onChangeYear(event.target.value);
  };

  return (
    <div className={styles["costs-filter"]}>
      <div className={styles["costs-filter__control"]}>
        <label>Select by year</label>
        <select onChange={yearChangeHandler}>
          {recentYears.map((option, index) => (
            <option key={index} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CostsFilter;
