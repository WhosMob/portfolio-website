import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { navItems } from '@/data/navigation'
import { useTheme } from '@/hooks/useTheme'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrollTo } from '@/hooks/useScrollTo'
import styles from './Navbar.module.css'

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const scrollTo = useScrollTo()

  const sectionIds = navItems.map((item) => item.href.replace('#', ''))
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleNavClick = (href: string) => {
    scrollTo(href)
    setMobileOpen(false)
  }

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.inner}`}>
          <a href="#" className={styles.logo}>
            Mob's Portfolio
          </a>

          <div className={styles.links}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`${styles.link} ${
                  activeId === item.href.replace('#', '') ? styles.active : ''
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className={styles.actions}>
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className={styles.mobileToggle}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`${styles.overlay} ${mobileOpen ? styles.open : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ''}`}>
        <button
          className={styles.closeBtn}
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`${styles.mobileLink} ${
              activeId === item.href.replace('#', '') ? styles.active : ''
            }`}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick(item.href)
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  )
}
