/* eslint-disable @next/next/no-img-element */
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { AiFillPhone } from "react-icons/ai";

import styles from "./styles.module.scss";
import Link from "next/link";

export function EntrarEmContato() {
  return (
    <button type="button" className={styles.signInButton}>
      <a
        href="https://api.whatsapp.com/send?phone=5581997405711"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillPhone color="#eba417" />
        Entre em contato
      </a>
    </button>
  );
}
