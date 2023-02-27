import "./CostDate.css";
const CostDate = (props) => {
  const month = new Date(props.date).toLocaleString("en-EN", { month: "long" });
  const day = new Date(props.date).toLocaleString("en-EN", { day: "2-digit" });
  const year = new Date(props.date).getFullYear();

  return (
    <div className="cost-date">
      <div className="cost-date__month">{month}</div>
      <div className="cost-date__year">{year}</div>
      <div className="cost-date__day">{day}</div>
    </div>
  );
};

export default CostDate;
