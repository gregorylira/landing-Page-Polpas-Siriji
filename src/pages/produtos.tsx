import Head from "next/head";
import { Produtos } from "../components/Produtos";

import styles from "./produtos.module.scss";

export default function produtos() {
  return (
    <>
      <Head>
        <title>Produtos</title>
      </Head>

      <main className={styles.containerMain}>
        <Produtos />
      </main>
    </>
  );
}
