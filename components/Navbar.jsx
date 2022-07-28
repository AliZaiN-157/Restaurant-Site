import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import telephone from '../public/img/phone.svg'
import logo from '../public/img/logo.png'
import cart from '../public/img/shopping_cart.svg'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'


const Navbar = () => {

  const quantity = useSelector(state => state.cart.quantity)
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src={telephone} alt=""  height="32" width="32"/>
        </div>
        <div className={styles.Texts}>
          <div className={styles.Text}> Order Now</div>
          <div className={styles.Text}> +9233-444-555</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/">
          <li className={styles.listItem}>Home</li>
          </Link>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src={logo} alt=""  height="160px" width="280px"/>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}  >Contact</li>
        </ul>
      </div>
      <Link href="/Cart" passHref>
      <div className={styles.item}>
        <div className={styles.cart} >
          <Image src={cart} alt=""  height="30px" width="30px"/>
          <div className={styles.counter}>{quantity}</div>
          </div>
      </div>
      </Link>
    </div>
  )
}

export default Navbar