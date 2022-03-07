/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
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
        <Link href="/">
          <img src="/images/logoPS.png" alt="ig.news" />
        </Link>
        <nav>
          <Link href="/">
            <a
              className={active == "/" ? styles.active : undefined}
              onClick={() => setActive("/")}
            >
              Home
            </a>
          </Link>
          <Link href="/produtos">
            <a
              className={active == "/produto" ? styles.active : undefined}
              onClick={() => setActive("/produto")}
            >
              Produtos
            </a>
          </Link>
        </nav>
        <EntrarEmContato />
      </div>
    </header>
  );
}
