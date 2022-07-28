import styles from "../styles/Product.module.css";
import Image from "next/image";
import pizza_img from "../public/img/pizza.png";
import Link from "next/link";

const ProductCard = ({ pizza }) => {
  return (
    <div className={styles.card}>
      <Link href={`/Product/${pizza._id}`} passHref>
        <Image
          src={pizza.img ? pizza.img : pizza_img}
          alt="pizza"
          width="500"
          height="500"
        />
      </Link>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>${pizza.prices[0]}</span>
      <p className={styles.description}>{pizza.desc}</p>
    </div>
  );
};

export default ProductCard;
