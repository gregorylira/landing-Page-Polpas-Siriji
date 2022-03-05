import styles from "./styles.module.scss";

export function SaibaMaisButton() {
  function handleClick() {
    window.location.hash = "saibamais";
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleClick}
    >
      Saiba Mais
    </button>
  );
}
