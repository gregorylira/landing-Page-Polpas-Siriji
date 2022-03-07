import styles from "./styles.module.scss";

export function ConhecaProdutos() {
  function handleClick() {
    window.location.href = "produtos";
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleClick}
    >
      Conheça nossos produtos
    </button>
  );
}
