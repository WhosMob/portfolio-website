import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import styles from './About.module.css'

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading title="About Me" />
        <div className={styles.content}>
          <p>
            Education: <br></br>
Currently student in Tehran
Enghelāb-e Eslāmi National
University of Skills. a state
technical college in Tehran, Iran.

          </p>
        </div>
      </div>
    </section>
  )
}
