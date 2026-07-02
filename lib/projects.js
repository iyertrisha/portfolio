export function getProjects() {
  return [
    {
      title: 'Gopala Nethralaya',
      url: 'https://github.com/iyertrisha/gopala-nethralaya',
      description:
        'Hospital Management System for patient registration, scheduling, and records with a React + Vite frontend, Django REST backend, and PostgreSQL database, deployed with Docker and GitHub Actions.',
      tags: ['React', 'Vite', 'Django', 'PostgreSQL', 'Docker', 'GitHub Actions'],
    },
    {
      title: 'NetGuard IaC Analyzer',
      url: 'https://github.com/iyertrisha/security_scanner',
      description:
        'AI-augmented Infrastructure-as-Code security scanner integrating GPT-4o with deterministic rules across FastAPI microservices to detect misconfigurations in Terraform and Kubernetes files at the GitHub PR level.',
      tags: ['FastAPI', 'React', 'PostgreSQL', 'NetworkX', 'Docker', 'Security'],
    },
    {
      title: 'NetGuard IaC Analyzer - Live Demo',
      url: 'https://net-guard-msrit.vercel.app/',
      description:
        'React + D3.js topology dashboard for NetGuard, showing graph-based blast radius, compliance posture scoring, and AI-generated fix recommendations.',
      tags: ['React', 'D3.js', 'Security', 'Visualization'],
    },
    {
      title: 'Kestra Open Source Contribution',
      url: 'https://github.com/kestra-io/kestra/pull/11865',
      description:
        'Converted the Toc.vue component to TypeScript in the Kestra open-source project, improving type safety and maintainability.',
      tags: ['TypeScript', 'Vue.js', 'Open Source'],
    },
  ];
}
