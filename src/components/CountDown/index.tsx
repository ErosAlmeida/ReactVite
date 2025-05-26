import { HomeProps } from "../../pages/Home";
import styles from "./styles.module.css";

export function CounterDown({ state }: HomeProps) {
  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  );
}
