import { useTaskContent } from "../../contexts/TaskContext";
import styles from "./styles.module.css";

export function CounterDown() {
  const taskContext = useTaskContent();
  console.log(taskContext);
  return <div className={styles.container}>00:00</div>;
}
