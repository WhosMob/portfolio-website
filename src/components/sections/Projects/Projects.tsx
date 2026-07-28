import { GithubIcon } from '@/components/icons/GithubIcon'
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading'
import { Card } from '@/components/ui/Card/Card'
import { projects } from '@/data/projects'
import styles from './Projects.module.css'

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading title="Projects" />
        <div className={styles.grid}>
          {projects.map((project) => (
            <Card key={project.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubLink}
                >
                  <GithubIcon size={18} />
                  <span>View on GitHub</span>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
