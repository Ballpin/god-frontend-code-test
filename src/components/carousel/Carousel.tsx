import styles from '@styles/carousel.module.css'
import Item from "@components/carousel/Item";
import { Flex } from "vcc-ui";

function Carousel({ children }: { children: any }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

Carousel.Item = Item;

export default Carousel;
