import DefaultLayout from "@/layouts/default";
import Carousel from "@components/carousel/Carousel";
import React, { useEffect, useState } from "react";
import { Flex, Row, StyleProvider, ThemePicker } from "vcc-ui";
import "../public/css/styles.css";
import carStyles from "@styles/cars.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface CarItem {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

function HomePage() {
  const [cars, setCars]: { cars: CarItem[] } = useState([]);

  // @ts-ignore-next-line
  useEffect(async () => {
    const { default: data }: { default: CarItem[] } = await import(
      "@api/cars.json"
    );
    setCars(data);
  }, []);

  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light">
          <DefaultLayout>
            <Carousel>
              {cars.map((car: CarItem, index: number) => (
                <Carousel.Item key={car.id}>
                  <h1 className={carStyles.sub_title}>{car.bodyType}</h1>
                  <h2 className={carStyles.title}>{car.modelName}</h2>
                  <img className={carStyles.image} src={car.imageUrl} />
                  <div className={carStyles.link_container}>
                    <a className={carStyles.link} href={`/learn/${car.id}`}>
                      Learn <FontAwesomeIcon icon={faChevronRight} fixedWidth />
                    </a>
                    <a className={carStyles.link} href={`/shop/${car.id}`}>
                      Shop <FontAwesomeIcon icon={faChevronRight} fixedWidth />
                    </a>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </DefaultLayout>
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
