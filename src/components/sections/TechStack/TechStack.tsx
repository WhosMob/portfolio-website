import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import { skills } from '@/data/skills'
import styles from './TechStack.module.css'

export function TechStack() {
  return (
    <section id="tech-stack" className="section">
      <div className="container">
        <SectionHeading title="Skills & Techs" />
        <div className={styles.grid}>
          {skills.map((group) => (
            <div key={group.category} className={styles.card}>
              <h3 className={styles.category}>{group.category}</h3>
              <ul className={styles.list}>
                {group.items.map((item) => (
                  <li key={item} className={styles.item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
