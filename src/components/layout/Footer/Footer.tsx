import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.left}>
          &copy; {year}  All rights reserved.
        </p>
        <p className={styles.right}>
          Built with rage &amp; anger
        </p>
      </div>
    </footer>
  )
}
