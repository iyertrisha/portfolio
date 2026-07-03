import Link from 'next/link';
import Layout from '../../components/layout';
import SEO from '../../components/SEO';
import utilStyles from '../../styles/utils.module.css';
import projectStyles from '../../styles/projects.module.css';
import { getExperience } from '../../lib/experience';

export async function getStaticProps() {
  const experience = getExperience();
  return { props: { experience } };
}

export default function ExperiencePage({ experience }) {
  return (
    <Layout showBackLink={false}>
      <SEO
        title="Experience"
        description="Internship experience for Trisha N Iyer — web development at Gopala Nethralaya and software engineering at Globalyceum, including AI/ML work on plagiarism detection and handwriting analysis."
        path="/experience"
      />

      <div style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
        <Link
          href="/"
          style={{
            border: '1px solid var(--border)',
            borderRadius: 10,
            padding: '8px 12px',
            textDecoration: 'none',
            color: 'var(--text)',
          }}
        >
          ← Back to home
        </Link>
      </div>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingXl}>Experience</h1>
        <ul className={utilStyles.list}>
          {experience.map((item) => (
            <li key={`${item.title}-${item.company}`} className={utilStyles.listItem}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                  <p className={projectStyles.projectLink} style={{ margin: 0 }}>
                    {item.title}
                  </p>
                  <small className={utilStyles.lightText}>{item.period}</small>
                </div>
                <small className={utilStyles.lightText}>
                  {item.role} · {item.company} · {item.location}
                </small>
                <ul style={{ margin: 0, paddingLeft: '1.1rem', color: 'var(--muted-text)' }}>
                  {item.bullets.map((bullet) => (
                    <li key={bullet} style={{ marginBottom: '6px' }}>{bullet}</li>
                  ))}
                </ul>
                {Array.isArray(item.tags) && item.tags.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          border: '1px solid var(--border)',
                          padding: '2px 8px',
                          borderRadius: 999,
                          fontSize: '0.75rem',
                          color: 'var(--muted-text)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        <Link
          href="/"
          style={{
            border: '1px solid var(--border)',
            borderRadius: 10,
            padding: '8px 12px',
            textDecoration: 'none',
            color: 'var(--text)',
          }}
        >
          ← Back to home
        </Link>
      </div>
    </Layout>
  );
}
