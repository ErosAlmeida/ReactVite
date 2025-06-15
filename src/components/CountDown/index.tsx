import { useTaskContent } from "../../contexts/TaskContext/useTaskContext";
import styles from "./styles.module.css";

export function CounterDown() {
  const { state } = useTaskContent();

  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  );
}
