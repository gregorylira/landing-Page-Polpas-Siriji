/* eslint-disable @next/next/no-img-element */
import { EntrarEmContato } from "./EntrarEmContato";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logoPS.png" alt="ig.news" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
        <EntrarEmContato />
      </div>
    </header>
  );
}
