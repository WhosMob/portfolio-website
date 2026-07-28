import { Mail, Send, Phone } from 'lucide-react'
import { GithubIcon } from '@/components/icons/GithubIcon'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading title="Get In Touch" />
        <div className={styles.content}>
          <p className={styles.infoText}>
            I&apos;m currently open to new opportunities. Whether you have a
            question or just want to say hi, I&apos;ll try my best to get back
            to you!
          </p>
          <div className={styles.infoItems}>
            <a
              href="mailto:whosmob@proton.me"
              className={styles.infoItem}
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
            <a
              href="https://t.me/mvbin"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.infoItem}
            >
              <Send size={18} />
              <span>Telegram</span>
            </a>
            <a
              href="https://github.com/whosmob"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.infoItem}
            >
              <GithubIcon size={18} />
              <span>GitHub</span>
            </a>
            <a href="tel:+98" className={styles.infoItem}>
              <Phone size={18} />
              <span>+98 </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
