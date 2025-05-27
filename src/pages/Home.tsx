import styles from "../styles/pages/Home.module.css";

import { Link } from "react-router";

export default function Home() {
  return (
    <div className={styles.home}>
      <span>welcome to the books app</span>
      <Link to="books">go to book page</Link>
    </div>
  );
}
