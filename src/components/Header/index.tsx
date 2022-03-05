/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

import { EntrarEmContato } from "./EntrarEmContato";
import styles from "./styles.module.scss";

export function Header() {
  const [active, setActive] = useState("#inicio");

  function handleClickNavegation(param: string) {
    setActive(param);
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logoPS.png" alt="ig.news" />
        <nav>
          <a
            className={active == "#inicio" ? styles.active : undefined}
            href="#inicio"
            onClick={() => setActive("#inicio")}
          >
            Home
          </a>
          <a
            className={active == "#saibamais" ? styles.active : undefined}
            href="#saibamais"
            onClick={() => setActive("#saibamais")}
          >
            Sobre nos
          </a>
        </nav>
        <EntrarEmContato />
      </div>
    </header>
  );
}
