/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { SaibaMais } from "../components/SaibaMais";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news </title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Ei, Bem vindo (a)</span>
          <h1>
            Polpas de qualidade com os melhores <span>preços</span> da região.
          </h1>
          <p>
            Saiba mais sobre nossos preços e nossos produtos <br />
            <span>clique abaixo e descubra mais</span>
          </p>
          <SaibaMais />
        </section>

        <img src="/images/juice-lemon-removebg.png" alt="Polpa de Fruta" />
      </main>
    </>
  );
}
