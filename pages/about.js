import Link from 'next/link';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import utilStyles from '../styles/utils.module.css';
import linksStyles from '../styles/links.module.css';

export default function AboutPage() {
  return (
    <Layout showBackLink={false}>
      <SEO
        title="About Trisha N Iyer"
        description="About Trisha N Iyer — Computer Science and Engineering student at MS Ramaiah Institute of Technology building full-stack apps, analytics dashboards, and security tools."
        path="/about"
      />
      <div style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
        <Link href="/" style={{
          border: '1px solid var(--border)',
          borderRadius: 10,
          padding: '8px 12px',
          textDecoration: 'none',
          color: 'var(--text)',
        }}>
          ← Back to home
        </Link>
      </div>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingXl}>About Trisha N Iyer</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <p>
            Hi, I&apos;m Trisha. I&apos;m a Computer Science and Engineering student at
            MS Ramaiah Institute of Technology in Bengaluru, focused on full-stack
            development, data analysis, and infrastructure-as-code security.
          </p>

          <div>
            <h2 className={utilStyles.headingLg}>Education</h2>
            <p>
              <strong>M S Ramaiah Institute Of Technology</strong> — Bengaluru, India
              <br />
              B.E. (Bachelor of Engineering) · Computer Science and Engineering · GPA: 9.2
              <br />
              Expected Graduation: May 2027
            </p>
          </div>

          <div>
            <h2 className={utilStyles.headingLg}>Technical Skills</h2>
            <p>
              <strong>Languages:</strong> Python, Java, SQL, HTML5, CSS, JavaScript, C, MERN
              <br />
              <strong>Developer Tools:</strong> AWS, PowerBI, Git, Azure, Docker, Jira
              <br />
              <strong>Libraries/Frameworks:</strong> Spring Boot, ReactJS, PostgreSQL, NextJS, NodeJS
            </p>
          </div>

          <div>
            <h2 className={utilStyles.headingLg}>Achievements</h2>
            <p>
              <strong>SIH Hackathon Finalist</strong> — Top 50 out of 150 teams
              <br />
              Secured position in the Top 50 in Smart India Hackathon internal college round,
              developing Herbiproof: a blockchain-based Ayurvedic herb traceability system with
              geo-tagged collection, lab tests, and processing steps ensuring provenance and
              regulatory compliance.
            </p>
          </div>

          <p>
            If you&apos;d like to get in touch, just click the contact button below.
          </p>

          <div style={{
            marginTop: '0.5rem',
            display: 'flex',
            gap: '10px',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
          }}>
            <Link className={linksStyles.linkButton} href="/contact" prefetch>
              Contact
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
