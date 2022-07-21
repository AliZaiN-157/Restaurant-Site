import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import telephone from '../public/img/phone.svg'
import logo from '../public/img/logo.png'
import cart from '../public/img/shopping_cart.svg'
import { useRouter } from 'next/router'


const Navbar = () => {

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
          <li className={styles.listItem} onClick={()=> router.push('/')}>Home</li>
          <li className={styles.listItem} onClick={()=> router.push('/Product/1')}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src={logo} alt=""  height="160px" width="280px"/>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}onClick={()=> router.push('/about')}>Blog</li>
          <li className={styles.listItem} onClick={()=> router.push('/contact')} >Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart} onClick={()=> router.push('/Cart')}>
          <Image src={cart} alt=""  height="30px" width="30px"/>
          <div className={styles.counter}>2</div>
          </div>
      </div>
    </div>
  )
}

export default Navbar