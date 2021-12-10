import styles from "@styles/carousel.module.css";
import Item from "@components/carousel/Item";
import Indicator from "./Indicator";
import { createRef, WheelEvent } from "react";

function scroll(event: WheelEvent<HTMLDivElement>, target: any) {
    target.scrollTo({
        top: 0,
        left: event.deltaY > 0 ? target.scrollLeft += 10: target.scrollLeft -= 10,
        behavior: 'smooth' //if you want smooth scrolling
    })
}

function Carousel({ items, children }: { children: any; items: object[] }) {
  const containerRef = createRef();

  return (
    <div className={styles.container}>
      {/* Inner Container */}
      <div
        className={styles.inner_container}
        onWheel={(e) => scroll(e, containerRef.current)}
        ref={containerRef}
      >
        {children}
      </div>
      <div className={styles.indicator_container}>
        {items.map((item, index) => (
          <Indicator item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

Carousel.Item = Item;

export default Carousel;
