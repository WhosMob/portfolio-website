import { Send, Mail, Phone } from 'lucide-react'
import { GithubIcon } from '@/components/icons/GithubIcon'
import { Button } from '@/components/ui/Button/Button'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.greeting}>Hi, my name is</p>
        <h1 className={styles.name}>Mobin.</h1>
        <h2 className={styles.title}>I build things for the web.</h2>
        <p className={styles.intro}>
          A Self-Taught junior Front-End Developer with a strong foundation in HTML,
CSS, Tailwind CSS, JavaScript, TypeScript, React.js.
Experienced in developing personal projects, state management, and
component-based architecture. Comfortable working with Git and GitHub
workflows and focused on writing clean, maintainable code.
        </p>

        <div className={styles.buttons}>
          <Button href="#about">About Me</Button>
          <Button href="#contact" variant="outline">
            Contact
          </Button>
          <Button href="#projects" variant="outline">
            Projects
          </Button>
        </div>

        <div className={styles.socials}>
          <a
            href="https://github.com/WhosMob"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://t.me/Mvbin"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Telegram"
          >
            <Send size={20} />
          </a>
          <a
            href="mailto:whosmob@proton.me"
            className={styles.socialLink}
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="tel:+98"
            className={styles.socialLink}
            aria-label="Phone"
          >
            <Phone size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
