import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import styles from './About.module.css'

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading title="About Me" />
        <div className={styles.content}>
          <p>
           Your About paragraph
          </p>
        </div>
      </div>
    </section>
  )
}
