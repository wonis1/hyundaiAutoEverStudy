import styles from "./Card.module.css";
import classNames from "classnames";

function Card({ title, children, variant = "card" }) {
  return (
    <div className={classNames(styles.card, styles[variant])}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.content}>{children}</div>
    </div>
  );
}
export default Card;
