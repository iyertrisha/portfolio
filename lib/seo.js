export const SITE_URL = 'https://iyertrisha.github.io';
export const SITE_NAME = 'Trisha N Iyer';
export const DEFAULT_TITLE =
  'Trisha N Iyer - Full-Stack & Security Portfolio';
export const DEFAULT_DESCRIPTION =
  'Trisha N Iyer is a Computer Science and Engineering student at MS Ramaiah Institute of Technology in Bengaluru who builds full-stack web apps, analytics dashboards, and infrastructure-as-code security tools.';
export const DEFAULT_OG_IMAGE = '/images/profile-photo.svg';
export const TWITTER_HANDLE = '';

export const SOCIAL_PROFILES = {
  github: 'https://github.com/iyertrisha',
  linkedin: 'https://www.linkedin.com/in/trisha-n-iyer-b506192b2',
  profile: 'https://profile.ritb.in/iyertrisha2',
  email: 'mailto:iyertrisha2@gmail.com',
};

export function canonicalUrl(path = '/') {
  const p = path.startsWith('/') ? path : `/${path}`;
  const withSlash = p.endsWith('/') ? p : `${p}/`;
  return `${SITE_URL}${withSlash}`;
}

export function absoluteImage(path) {
  if (!path) return `${SITE_URL}${DEFAULT_OG_IMAGE}`;
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Trisha N Iyer',
    url: SITE_URL,
    image: `${SITE_URL}/images/profile-photo.svg`,
    jobTitle: 'Computer Science and Engineering Student',
    description: DEFAULT_DESCRIPTION,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressCountry: 'IN',
    },
    knowsAbout: [
      'Python',
      'Java',
      'SQL',
      'JavaScript',
      'React',
      'Next.js',
      'Django',
      'FastAPI',
      'PostgreSQL',
      'Docker',
      'AWS',
      'Data analysis',
      'Infrastructure as Code security',
    ],
    sameAs: [
      SOCIAL_PROFILES.github,
      SOCIAL_PROFILES.linkedin,
      SOCIAL_PROFILES.profile,
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'IEEE WIE MSRIT',
    },
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    author: {
      '@type': 'Person',
      name: 'Trisha N Iyer',
      url: SITE_URL,
    },
  };
}
