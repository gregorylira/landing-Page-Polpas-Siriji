/* eslint-disable @next/next/no-img-element */
import Head from "next/head";

import { Homeland } from "../components/Homeland";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Polpas Siriji </title>
      </Head>

      <main className={styles.contentContainer} id="inicio">
        <Homeland />
      </main>
    </>
  );
}
