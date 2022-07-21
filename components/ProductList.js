import Image from "next/image";
import styles from "../styles/Product.module.css";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.Title}>Best Pizza In the Town</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod,
        nisl eget consectetur sagittis, nisl nunc consectetur nisi, euismod
        aliquam nisi nisl euismod.
      </p>
      <div className={styles.wrapper}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductList;
