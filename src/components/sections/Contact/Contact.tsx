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
              href="mailto:WhosMob@proton.me"
              className={styles.infoItem}
            >
              <Mail size={18} />
              <span>Email: &nbsp;&nbsp; WhosMob@proton.me</span>
            </a>
            <a
              href="https://t.me/Mvbin"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.infoItem}
            >
              <Send size={18} />
              <span>Telegram: &nbsp;&nbsp; T.me/Mvbin</span>
            </a>
            <a
              href="https://github.com/WhosMob"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.infoItem}
            >
              <GithubIcon size={18} />
              <span>GitHub: &nbsp;&nbsp; Github.com/WhosMob</span>
            </a>
            <a href="tel:+98" className={styles.infoItem}>
              <Phone size={18} />
              <span>Phone Number: &nbsp;&nbsp; +98 </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
