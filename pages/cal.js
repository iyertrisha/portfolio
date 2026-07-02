import Link from 'next/link';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import OutboundLink from '../components/OutboundLink';
import utilStyles from '../styles/utils.module.css';
import linksStyles from '../styles/links.module.css';
import { GOOGLE_CALENDAR_SCHEDULE_URL } from '../lib/schedule';

export default function CalPage() {
  return (
    <Layout showBackLink={false}>
      <SEO title="Schedule a Call" path="/cal" noindex />

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
        <h1 className={utilStyles.headingXl}>Schedule a Call</h1>
        <p className={utilStyles.lightText} style={{ marginBottom: '1rem' }}>
          Pick a time that works for you using my Google Calendar appointment schedule.
        </p>

        <p className={utilStyles.lightText} style={{ marginBottom: '1rem' }}>
          You&apos;ll be taken to Google Calendar to choose a slot that works for you.
        </p>

        <OutboundLink
          href={GOOGLE_CALENDAR_SCHEDULE_URL}
          eventName="schedule-call-click"
          className={linksStyles.linkButton}
          style={{ display: 'inline-flex' }}
        >
          Book on Google Calendar
        </OutboundLink>
      </section>
    </Layout>
  );
}
