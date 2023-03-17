import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div
      className={`${styles["form-control"]} ${
        !props.isValid && styles.invalid
      }`}
    >
      <label>{props.label}</label>
      <input
        min={props.min}
        max={props.max}
        curr={props}
        step={props.step}
        onChange={props.onChange}
        value={props.value}
        type={props.type}
      />
    </div>
  );
};
export default Input;
