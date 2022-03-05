/* eslint-disable @next/next/no-img-element */
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { AiFillPhone } from "react-icons/ai";

import styles from "./styles.module.scss";

export function EntrarEmContato() {
  const isUserLoggedIn = false;
  return (
    <button type="button" className={styles.signInButton}>
      <AiFillPhone color="#eba417" />
      Entre em contato
    </button>
  );
}
