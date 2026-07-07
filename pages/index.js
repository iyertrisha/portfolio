import Link from 'next/link';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import OutboundLink from '../components/OutboundLink';
import { personJsonLd, websiteJsonLd, SOCIAL_PROFILES } from '../lib/seo';
import homeStyles from '../styles/home.module.css';
import { getProjects } from '../lib/projects';
import { getExperience } from '../lib/experience';
import { getLeadership } from '../lib/leadership';

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [personJsonLd(), websiteJsonLd()],
};

export async function getStaticProps() {
  const allProjects = getProjects();
  const allExperience = getExperience();
  const allLeadership = getLeadership();

  return {
    props: {
      featuredProjects: allProjects.slice(0, 3),
      featuredExperience: allExperience,
      featuredLeadership: allLeadership,
    },
  };
}

export default function Home({
  featuredProjects = [],
  featuredExperience = [],
  featuredLeadership = [],
}) {
  return (
    <Layout home>
      <SEO path="/" jsonLd={homeJsonLd} />

      <section className={homeStyles.hero}>
        <p className={homeStyles.heroTag}>Bengaluru, India</p>
        <p className={homeStyles.heroBio}>
          I build <strong>full-stack apps</strong>, <strong>AI-powered tools</strong>,{' '}
          <strong>DevSecOps pipelines</strong>, and <strong>cloud infrastructure</strong>{' '}
          and turn raw data into <strong>insights that drive decisions</strong>.
        </p>
      </section>

      <div className={homeStyles.statusBar}>
        <span className={homeStyles.statusText}>
          B.E. CSE @ MSRIT — GPA <strong>9.2</strong> — Expected May 2027
        </span>
      </div>

      <section className={homeStyles.section}>
        <div className={homeStyles.linksGrid}>
          <Link className={homeStyles.chip} href="/projects">Projects</Link>
          <Link className={homeStyles.chip} href="/experience">Experience</Link>
          <Link className={homeStyles.chip} href="/contact">Contact</Link>
          <Link className={homeStyles.chip} href="/about">About</Link>
        </div>
      </section>

      <section className={`${homeStyles.section} ${homeStyles.highlightSection}`}>
        <div className={homeStyles.sectionHeader}>
          <span className={homeStyles.highlightSectionLabel}>Experience</span>
          <Link href="/experience" className={homeStyles.viewMore}>View all</Link>
        </div>
        <div className={homeStyles.highlightGrid}>
          {featuredExperience.map((item) => (
            <article key={`${item.title}-${item.company}`} className={homeStyles.highlightCard}>
              <div className={homeStyles.highlightCardHeader}>
                <p className={homeStyles.highlightCardTitle}>{item.title}</p>
                <p className={homeStyles.highlightCardMeta}>{item.period}</p>
              </div>
              <p className={homeStyles.highlightCardSubtitle}>
                {item.role} · {item.company} · {item.location}
              </p>
              <ul className={homeStyles.highlightBullets}>
                {item.bullets.slice(0, 2).map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {Array.isArray(item.tags) && item.tags.length > 0 && (
                <div className={homeStyles.projectTags}>
                  {item.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className={homeStyles.projectTag}>{tag}</span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className={`${homeStyles.section} ${homeStyles.highlightSection}`}>
        <div className={homeStyles.sectionHeader}>
          <span className={homeStyles.highlightSectionLabel}>Leadership</span>
        </div>
        <div className={homeStyles.highlightGrid}>
          {featuredLeadership.map((item) => (
            <article key={item.title} className={homeStyles.highlightCard}>
              <div className={homeStyles.highlightCardHeader}>
                <p className={homeStyles.highlightCardTitle}>{item.title}</p>
                <p className={homeStyles.highlightCardMeta}>{item.period}</p>
              </div>
              <ul className={homeStyles.highlightBullets}>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={homeStyles.section}>
        <div className={homeStyles.sectionHeader}>
          <span className={homeStyles.sectionLabel}>Latest Work</span>
          <Link href="/projects" className={homeStyles.viewMore}>View all</Link>
        </div>
        <div className={homeStyles.projectGrid}>
          {featuredProjects.map((project) => (
            <OutboundLink
              key={project.title}
              href={project.url}
              eventName="project-click"
              className={homeStyles.projectCard}
            >
              <p className={homeStyles.projectName}>{project.title}</p>
              <p className={homeStyles.projectDesc}>{project.description}</p>
              {Array.isArray(project.tags) && project.tags.length > 0 && (
                <div className={homeStyles.projectTags}>
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className={homeStyles.projectTag}>{tag}</span>
                  ))}
                </div>
              )}
            </OutboundLink>
          ))}
        </div>
      </section>

      <section className={homeStyles.section}>
        <div className={homeStyles.sectionHeader}>
          <span className={homeStyles.sectionLabel}>Connect</span>
        </div>
        <div className={homeStyles.linksGrid}>
          <OutboundLink className={homeStyles.chip} href={SOCIAL_PROFILES.github} eventName="find-me-click">GitHub</OutboundLink>
          <OutboundLink className={homeStyles.chip} href={SOCIAL_PROFILES.linkedin} eventName="find-me-click">LinkedIn</OutboundLink>
          <OutboundLink className={homeStyles.chip} href={SOCIAL_PROFILES.profile} eventName="find-me-click">Profile</OutboundLink>
          <OutboundLink className={homeStyles.chip} href={SOCIAL_PROFILES.email} eventName="find-me-click">Email</OutboundLink>
        </div>
      </section>
    </Layout>
  );
}
