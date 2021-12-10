import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "@styles/carousel.module.css";

function goToItem() {
    // Event That will let use to go to item
}

function Indicator({ item }: { item: object }) {
  return (
    <button onClick={goToItem} className={styles.indicator}>
      <FontAwesomeIcon icon={faCircle} />
    </button>
  );
}

export default Indicator;
