import Card from "./Card";
import styles from "./ErrorModal.module.css";
import Button from "./Button.js";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onCloseModal}></div>

      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <h3>{props.message}</h3>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onCloseModal}>Close</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
