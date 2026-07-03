// Experience data for Trisha N Iyer.
// Each item has: title, company, role, location, period, bullets, and optional tags.

export function getExperience() {
  return [
    {
      title: 'Web Development Intern',
      company: 'Gopala Nethralaya',
      role: 'Frontend Developer',
      location: 'Bengaluru, India',
      period: 'Sep 2024',
      bullets: [
        'Built a Hospital Management Website using Vite + React, Django, PostgreSQL, and Docker.',
        'Automated deployment with CI/CD pipelines (GitHub Actions, Docker), improving delivery speed by 40% and reducing manual errors by 30%.',
      ],
      tags: ['Vite', 'React', 'Django', 'PostgreSQL', 'Docker', 'GitHub Actions'],
    },
    {
      title: 'Software Engineering Intern',
      company: 'Globalyceum',
      role: 'Data Analysis with Founders',
      location: 'Remote',
      period: 'Dec 2025 – Present',
      bullets: [
        'Currently building a plagiarism checker and working closely on ML models to detect plagiarism, alongside a handwriting analysis engine; the product is expected to be adopted district-wide across a U.S. state.',
        'Built a full-stack Skrypts Analytics Dashboard using Ruby on Rails, implementing 5 REST APIs and processing data across 6+ database tables to analyze student performance and growth trends.',
        'Optimized complex queries with eager loading and indexing to achieve sub-100ms API response times, and developed a 3-tab interactive dashboard with Chart.js visualizations.',
        'Conducted data analysis with founders on 500+ student records, delivering insights that improved rubric scoring accuracy by 20%.',
      ],
      tags: [
        'Python',
        'TypeScript',
        'AI/ML',
        'ML Model Development',
        'Feature Engineering',
        'Model Evaluation',
        'Ruby on Rails',
        'PostgreSQL',
        'Chart.js',
        'REST APIs',
      ],
    },
  ];
}

