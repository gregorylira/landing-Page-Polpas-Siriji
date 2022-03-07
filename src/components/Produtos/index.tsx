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
              <h3>R$ 6,00</h3>
            </td>
          </tr>
          <tr>
            <td>
              <img src="images/abacaxi_icon.png" alt="abacaxiIcon" />
            </td>
            <td>
              <h2>Abacaxi c/ hotelã</h2>
            </td>
            <td>
              <h3>R$ 6,00</h3>
            </td>
          </tr>
          <tr>
            <td>
              <img src="images/goiaba.svg" alt="abacaxiIcon" />
            </td>
            <td>
              <h2>Goiaba</h2>
            </td>
            <td>
              <h3>R$ 5,50</h3>
            </td>
          </tr>
          <tr>
            <td>
              <img src="images/mangaIcon.png" alt="abacaxiIcon" />
            </td>
            <td>
              <h2>Manga</h2>
            </td>
            <td>
              <h3>R$ 5,50</h3>
            </td>
          </tr>
          <tr>
            <td>
              <img src="images/acerola.png" alt="abacaxiIcon" />
            </td>
            <td>
              <h2>Acerola</h2>
            </td>
            <td>
              <h3>R$ 6,00</h3>
            </td>
          </tr>
          <tr>
            <td>
              <img src="images/cajuicon.png" alt="abacaxiIcon" />
            </td>
            <td>
              <h2>Caju</h2>
            </td>
            <td>
              <h3>R$ 6,00</h3>
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
              <h3>R$ 6,00</h3>
            </td>
          </tr>
          <tr>
            <td>
              <img src="images/graviolaicon.png" alt="uvaIcon" />
            </td>
            <td>
              <h2>Graviola</h2>
            </td>
            <td>
              <h3>R$ 8,00</h3>
            </td>
          </tr>
          <tr>
            <td>
              <img src="images/tangerineicon.svg" alt="uvaIcon" />
            </td>
            <td>
              <h2>Tangerina</h2>
            </td>
            <td>
              <h3>R$ 7,00</h3>
            </td>
          </tr>
          <tr>
            <td>
              <img src="images/mangabaicon.jpg" alt="uvaIcon" />
            </td>
            <td>
              <h2>Mangaba</h2>
            </td>
            <td>
              <h3>R$ 9,00</h3>
            </td>
          </tr>
          <tr>
            <td>
              <img src="images/pinhaicon.png" alt="uvaIcon" />
            </td>
            <td>
              <h2>Pinha</h2>
            </td>
            <td>
              <h3>R$ 9,00</h3>
            </td>
          </tr>
          <tr>
            <td>
              <img src="images/pitangaicon.png" alt="uvaIcon" />
            </td>
            <td>
              <h2>Pitanga</h2>
            </td>
            <td>
              <h3>R$ 9,00</h3>
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td>
              <img src="images/morangoicon.png" alt="orangeIcon" />
            </td>
            <td>
              <h2>Morango</h2>
            </td>
            <td>
              <h3>R$ 12,00</h3>
            </td>
          </tr>
          <tr>
            <td>
              <img src="images/maracujaicon.png" alt="orangeIcon" />
            </td>
            <td>
              <h2>Maracuja</h2>
            </td>
            <td>
              <h3>R$ 9,00</h3>
            </td>
          </tr>
          <tr>
            <td>
              <img src="images/açaiicon.png" alt="orangeIcon" />
            </td>
            <td>
              <h2>Guaráçai</h2>
            </td>
            <td>
              <h3>R$ 12,00</h3>
            </td>
          </tr>
          <tr>
            <td>
              <img src="images/guaranaicon.png" alt="orangeIcon" />
            </td>
            <td>
              <h2>Guarabom</h2>
            </td>
            <td>
              <h3>R$ 12,00</h3>
            </td>
          </tr>
          <tr>
            <td>
              <img src="images/cupuacuicon.jpeg" alt="orangeIcon" />
            </td>
            <td>
              <h2>Cupuaçu</h2>
            </td>
            <td>
              <h3>R$ 14,00</h3>
            </td>
          </tr>
          <tr>
            <td>
              <img src="images/orange.svg" alt="orangeIcon" />
            </td>
            <td>
              <h2>Caja</h2>
            </td>
            <td>
              <h3>R$ 7,00</h3>
            </td>
          </tr>
        </table>
      </div>
      <span>
        Atenção: os preços são a combinar em contatos, os atuais presentes, são
        uma estimativa, para contato comercial e dependendo das quantidades,
        podemos abaixar os preços.
      </span>
    </div>
  );
}
