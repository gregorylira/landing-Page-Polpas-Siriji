/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss";

export function Produtos() {
  return (
    <div className={styles.Container}>
      <h1>Polpas da melhor qualidade com os melhores preços da região.</h1>
      <div className={styles.Content}>
        <table>
          <tr>
            <td>
              <img src="images/abacaxi_icon.png" alt="abacaxiIcon" />
            </td>
            <td>
              <h2>Abacaxi</h2>
            </td>
            <td>
              <h3>R$ 1,00</h3>
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td>
              <img src="images/grapesfruit.png" alt="uvaIcon" />
            </td>
            <td>
              <h2>Uva</h2>
            </td>
            <td>
              <h3>R$ 1,00</h3>
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td>
              <img src="images/orange.svg" alt="orangeIcon" />
            </td>
            <td>
              <h2>Caja</h2>
            </td>
            <td>
              <h3>R$ 1,00</h3>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
