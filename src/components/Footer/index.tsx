import { Link } from "react-router";
import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/about-pomodoro">
        Entenda como funciona a técnica Pomodoro
      </Link>
      <Link href="/">
        Chronos Pomodoro &copy;{new Date().getFullYear()}- feito por Eros Vilela
      </Link>
    </footer>
  );
}
