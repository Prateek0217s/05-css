import React from 'react'
import styles from './header.module.css'
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a className={styles.logo} href="#">Chutiya App</a>
        <nav className={styles.nav}>
          <a className={styles.navLink} href="#">Home</a>
          <a className={styles.navLink} href="#">About</a>
          <a className={styles.navLink} href="#">Jobs</a>
        </nav>
        <div>
          <button className={styles.signIn}>Sign in</button>
        </div>
      </div>
    </header>
  )
}

export default Header
