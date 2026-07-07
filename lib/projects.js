export function getProjects() {
  return [
    {
      title: 'DanceGPT',
      url: 'https://github.com/iyertrisha/dance-GPT',
      description:
        'First AI-powered exam prep platform for Bharatanatyam Junior and Senior Gandharva theory, combining syllabus-grounded tutoring, flashcards, and notes in one app. Built a RAG pipeline (LanceDB, BGE-M3 embeddings, hybrid retrieval, reranking, CRAG) over indexed syllabus materials, with pre-made Junior/Senior flashcard decks, AI-generated study cards, and a chat tutor for theory revision. Full-stack: Next.js frontend, Node.js/PostgreSQL API, FastAPI AI service, and Dockerized local deployment.',
      tags: ['Next.js', 'FastAPI', 'Node.js', 'PostgreSQL', 'RAG', 'LanceDB', 'Docker', 'AI/ML'],
    },
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
      title: 'Kestra Open Source Contribution',
      url: 'https://github.com/kestra-io/kestra/pull/11865',
      description:
        'Converted the Toc.vue component to TypeScript in the Kestra open-source project, improving type safety and maintainability.',
      tags: ['TypeScript', 'Vue.js', 'Open Source'],
    },
  ];
}
