import styles from "../styles/Product.module.css";
import Image from "next/image";
import pizza from "../public/img/pizza.png";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <Image src={pizza} alt="pizza" width="500" height="500" />
      <h1 className={styles.title}>Cheese Pepperoni</h1>
      <span className={styles.price}>$20.9</span>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod,
        nisl eget consectetur sagittis, nisl nunc consectetur nisi, euismod.
      </p>
    </div>
  );
};

export default ProductCard;
