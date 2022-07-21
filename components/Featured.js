import Image from "next/image";
import styles from "../styles/Featured.module.css";
import arrow_left from "../public/img/arrowl.png";
import arrow_right from "../public/img/arrowr.png";
import { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);

  const images = [
    "/img/featured_11.jpg",
    "/img/featured_12.jpg",
    "/img/featured_13.jpg",
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.arrowlContainer} onClick={() => handleArrow("l")}>
        <Image
          src={arrow_left}
          alt=""
          style={{ float: "left" }}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div
        className={styles.Wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" key={i} objectFit="fill" />
          </div>
        ))}
      </div>
      <div className={styles.arrowrContainer} onClick={() => handleArrow("r")}>
        <Image
          src={arrow_right}
          alt=""
          style={{ float: "right" }}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Featured;
