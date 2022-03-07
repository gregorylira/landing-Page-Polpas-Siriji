/* eslint-disable @next/next/no-img-element */
import { ConhecaProdutos } from "../ConhecaProdutos";
import styles from "./styles.module.scss";

export function Homeland() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.hero}>
          <span>👏 Ei, Bem vindo (a)</span>
          <h1>
            Polpas de qualidade com os melhores <span>preços</span> da região.
          </h1>
          <p>
            Saiba mais sobre nossos preços e nossos produtos <br />
            <span>clique abaixo e descubra mais</span>
          </p>
          <ConhecaProdutos />
        </section>
        <img src="/images/juice-lemon-removebg.png" alt="Polpa de Fruta" />
      </div>
    </>
  );
}
