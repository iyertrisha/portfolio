import styles from '../styles/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const name = 'Trisha N Iyer';

export default function Layout({ children, home, showBackLink = true, compactHeader = false, backLinkExtra = null }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div style={{ alignSelf: 'flex-end' }}>
          <ThemeToggle />
        </div>
        {compactHeader
          ? null
          : home
          ? (
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            )
          : (
            <p className={utilStyles.headingLg} style={{ margin: '1rem 0' }}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </p>
            )}
      </header>
      <main>{children}</main>
      {!home && showBackLink && (
        <div className={styles.backToHome}>
          <Link href="/" className={utilStyles.backLink}>
            ← Back to home
          </Link>
          {backLinkExtra}
        </div>
      )}
    </div>
  );
}
