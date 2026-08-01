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
            your cnontact paragraph text
          </p>
          <div className={styles.infoItems}>
            <a
              href="mailto:"
              className={styles.infoItem}
            >
              <Mail size={18} />
              <span>Email: &nbsp;&nbsp; your email</span>
            </a>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.infoItem}
            >
              <Send size={18} />
              <span>Telegram: &nbsp;&nbsp; your telegram</span>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.infoItem}
            >
              <GithubIcon size={18} />
              <span>GitHub: &nbsp;&nbsp; your github</span>
            </a>
            <a href="tel:+" className={styles.infoItem}>
              <Phone size={18} />
              <span>Phone Number: &nbsp;&nbsp; your phone number</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
