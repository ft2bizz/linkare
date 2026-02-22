
import { Resource, Project, ResourceAllocationStats, Task, Epic } from './types';

export const MOCK_RESOURCES: Resource[] = [
  { 
    id: '1', 
    name: 'Ana Silva', 
    role: 'Frontend Developer', 
    skills: ['React', 'TypeScript', 'Tailwind', 'Next.js', 'Redux'], 
    availability: 'Available', 
    experienceLevel: 'Senior', 
    allocationPercentage: 0,
    email: 'ana.silva@linkare.ai',
    phone: '+55 11 98888-7777',
    location: 'São Paulo, SP',
    joinedDate: '2021-03-15',
    bio: 'Senior Frontend Engineer with 8+ years of experience building scalable web applications. Specialist in React ecosystem and performance optimization.',
    certifications: ['AWS Certified Developer', 'Meta Front-End Professional'],
    projectHistory: [
      { name: 'Global Bank App', role: 'Lead Frontend', period: '2023 - 2024', description: 'Led the migration of the core banking dashboard to React.' },
      { name: 'E-Health Portal', role: 'Senior Dev', period: '2022 - 2023', description: 'Developed a real-time patient monitoring interface.' }
    ]
  },
  { 
    id: '2', 
    name: 'Bruno Costa', 
    role: 'Backend Developer', 
    skills: ['Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Redis'], 
    availability: 'Busy', 
    experienceLevel: 'Mid', 
    allocationPercentage: 100,
    email: 'bruno.costa@linkare.ai',
    phone: '+55 11 97777-6666',
    location: 'Curitiba, PR',
    joinedDate: '2022-06-10',
    bio: 'Backend specialist focused on microservices architecture and high-availability systems.',
    certifications: ['AWS Solutions Architect', 'Node.js Services Developer'],
    projectHistory: [
      { name: 'Logistics Hub', role: 'Backend Dev', period: '2023 - Present', description: 'Scaling the order processing engine to handle 1M+ requests/day.' }
    ]
  },
  { 
    id: '3', 
    name: 'Carla Souza', 
    role: 'UX/UI Designer', 
    skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'], 
    availability: 'Available', 
    experienceLevel: 'Senior', 
    allocationPercentage: 20,
    email: 'carla.souza@linkare.ai',
    phone: '+55 21 96666-5555',
    location: 'Rio de Janeiro, RJ',
    joinedDate: '2020-11-01',
    bio: 'Product Designer passionate about creating intuitive user experiences and robust design systems.',
    certifications: ['Google UX Design Professional', 'Nielsen Norman Group UX Certified'],
    projectHistory: [
      { name: 'Fintech Wallet', role: 'Lead Designer', period: '2023', description: 'Redesigned the mobile wallet experience, increasing retention by 15%.' }
    ]
  },
  { 
    id: '4', 
    name: 'Diego Lima', 
    role: 'Project Manager', 
    skills: ['Agile', 'Scrum', 'Risk Management', 'Jira'], 
    availability: 'Available', 
    experienceLevel: 'Lead', 
    allocationPercentage: 40,
    email: 'diego.lima@linkare.ai',
    phone: '+55 31 95555-4444',
    location: 'Belo Horizonte, MG',
    joinedDate: '2019-05-20',
    bio: 'Strategic Project Manager with a track record of delivering complex IT projects on time and within budget.',
    certifications: ['PMP', 'Certified Scrum Master (CSM)'],
    projectHistory: [
      { name: 'Cloud Migration X', role: 'Project Lead', period: '2022 - 2023', description: 'Managed the migration of 50+ legacy apps to AWS.' }
    ]
  },
  { 
    id: '5', 
    name: 'Elena Martins', 
    role: 'QA Engineer', 
    skills: ['Jest', 'Cypress', 'Automation', 'Selenium'], 
    availability: 'Partially Available', 
    experienceLevel: 'Mid', 
    allocationPercentage: 60,
    email: 'elena.martins@linkare.ai',
    phone: '+55 11 94444-3333',
    location: 'São Paulo, SP',
    joinedDate: '2023-01-15',
    bio: 'QA Engineer dedicated to ensuring software quality through automated testing and rigorous manual checks.',
    certifications: ['ISTQB Foundation Level'],
    projectHistory: [
      { name: 'Retail Checkout', role: 'QA Automation', period: '2023 - Present', description: 'Implemented end-to-end testing suite for the checkout flow.' }
    ]
  },
  { 
    id: '6', 
    name: 'Fabio Santos', 
    role: 'DevOps Engineer', 
    skills: ['Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Ansible'], 
    availability: 'Available', 
    experienceLevel: 'Senior', 
    allocationPercentage: 0,
    email: 'fabio.santos@linkare.ai',
    phone: '+55 11 93333-2222',
    location: 'São Paulo, SP',
    joinedDate: '2021-08-12',
    bio: 'Infrastructure as Code enthusiast. Expert in building resilient CI/CD pipelines and managing Kubernetes clusters.',
    certifications: ['CKA (Certified Kubernetes Administrator)', 'HashiCorp Certified: Terraform Associate'],
    projectHistory: [
      { name: 'SaaS Platform Scale', role: 'DevOps Lead', period: '2022 - 2023', description: 'Automated infrastructure provisioning using Terraform and Ansible.' }
    ]
  }
];

export const ALLOCATION_STATS: ResourceAllocationStats = {
  totalResources: 45,
  averageUtilization: 72,
  onBench: 8,
  overAllocated: 3
};

// Helper to generate mock delivery data
const createMockDelivery = (projectId: string): { epics: Epic[], tasks: Task[] } => {
  if (projectId === 'PRJ-001') {
    const epics: Epic[] = [
      { id: 'e1', title: 'Frontend Modernization', description: 'Migrating legacy UI to Next.js and Tailwind.', status: 'In Progress' },
      { id: 'e2', title: 'Headless API Integration', description: 'Connecting the new frontend to the commerce engine.', status: 'Planned' },
      { id: 'e3', title: 'Payment Gateway Migration', description: 'Switching to Stripe for global payments.', status: 'Planned' }
    ];
    const tasks: Task[] = [
      { id: 't1', epicId: 'e1', title: 'Setup Next.js Project', description: 'Initialize repository and configure Tailwind.', status: 'Done', priority: 'High', estimatedHours: 8, tags: ['Setup'] },
      { id: 't2', epicId: 'e1', title: 'Design System Implementation', description: 'Create reusable components in Figma and React.', status: 'In Progress', priority: 'Medium', estimatedHours: 16, tags: ['UI'] },
      { id: 't3', epicId: 'e2', title: 'Product Catalog API', description: 'Fetch and display products from the headless CMS.', status: 'Todo', priority: 'High', estimatedHours: 12, tags: ['API'] },
      { id: 't4', epicId: 'e3', title: 'Stripe Integration', description: 'Implement secure checkout flow.', status: 'Backlog', priority: 'Critical', estimatedHours: 20, tags: ['Payments'] },
      { id: 't5', epicId: 'e1', title: 'Mobile Responsiveness', description: 'Ensure all pages work on mobile devices.', status: 'Review', priority: 'Medium', estimatedHours: 8, tags: ['UI'] }
    ];
    return { epics, tasks };
  }
  
  if (projectId === 'PRJ-002') {
    const epics: Epic[] = [
      { id: 'e4', title: 'LLM Integration', description: 'Core AI engine setup and prompt engineering.', status: 'In Progress' },
      { id: 'e5', title: 'Knowledge Base Sync', description: 'Indexing company docs for RAG.', status: 'Planned' }
    ];
    const tasks: Task[] = [
      { id: 't6', epicId: 'e4', title: 'Vertex AI API Setup', description: 'Configure Google Cloud credentials.', status: 'Done', priority: 'High', estimatedHours: 4, tags: ['AI'] },
      { id: 't7', epicId: 'e5', title: 'Vector DB Indexing', description: 'Setup Pinecone and index initial docs.', status: 'In Progress', priority: 'High', estimatedHours: 12, tags: ['Data'] },
      { id: 't8', epicId: 'e4', title: 'Chat Widget Component', description: 'Build the frontend chat interface.', status: 'Todo', priority: 'Medium', estimatedHours: 8, tags: ['UI'] }
    ];
    return { epics, tasks };
  }

  const epics: Epic[] = [
    { id: 'e6', title: 'Infrastructure Audit', description: 'Reviewing current on-premise setup.', status: 'Completed' },
    { id: 'e7', title: 'AWS Environment Setup', description: 'Provisioning VPCs and IAM roles.', status: 'In Progress' }
  ];
  const tasks: Task[] = [
    { id: 't9', epicId: 'e6', title: 'Inventory of Servers', description: 'List all physical and virtual machines.', status: 'Done', priority: 'Medium', estimatedHours: 16, tags: ['Audit'] },
    { id: 't10', epicId: 'e7', title: 'Terraform VPC Setup', description: 'Write and apply TF scripts for networking.', status: 'In Progress', priority: 'High', estimatedHours: 8, tags: ['DevOps'] }
  ];
  return { epics, tasks };
};

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'PRJ-001',
    title: 'E-commerce Platform Revamp',
    description: 'Modernizing the legacy e-commerce platform with a headless architecture and React frontend.',
    duration: '6 months',
    industry: 'Retail',
    status: 'Active',
    progress: 65,
    budgetUtilization: 45,
    health: 'On Track',
    startDate: '2024-01-15',
    endDate: '2024-07-15',
    plData: {
      revenue: 250000,
      laborCosts: 110000,
      cloudCosts: 25000,
      licenseCosts: 15000,
      grossProfit: 100000,
      marginPercentage: 40,
      burnRate: 25000,
      aiSuggestions: [
        "Optimize AWS Lambda usage to reduce cloud costs by 12%.",
        "Consolidate SaaS licenses for monitoring tools (Datadog/New Relic).",
        "Shift 20% of manual QA to automated regression to lower labor burn."
      ]
    },
    scope: {
      objectives: ['Increase conversion rate by 20%', 'Reduce page load time to < 2s', 'Implement mobile-first design'],
      deliverables: ['New UI/UX Design', 'Headless API Integration', 'Payment Gateway Migration'],
      risks: ['Data migration complexity', 'Third-party API downtime'],
      timeline: [
        { phase: 'Discovery', duration: '4 weeks' },
        { phase: 'Design', duration: '6 weeks' },
        { phase: 'Development', duration: '12 weeks' }
      ]
    },
    squad: [
      { role: 'Frontend Lead', count: 1, reasoning: 'Required for complex React architecture.' },
      { role: 'Backend Dev', count: 2, reasoning: 'Needed for API integrations.' }
    ],
    matches: [
      { role: 'Frontend Lead', suggestedResource: MOCK_RESOURCES[0], matchScore: 95, matchReason: 'Expert in React and Tailwind.' }
    ],
    delivery: {
      ...createMockDelivery('PRJ-001'),
      sprints: [],
      velocity: 35,
      blockers: []
    }
  },
  {
    id: 'PRJ-002',
    title: 'AI Customer Support Bot',
    description: 'Implementing a generative AI chatbot to handle first-level customer inquiries.',
    duration: '3 months',
    industry: 'Customer Service',
    status: 'At Risk',
    progress: 30,
    budgetUtilization: 60,
    health: 'At Risk',
    startDate: '2024-03-01',
    endDate: '2024-06-01',
    plData: {
      revenue: 120000,
      laborCosts: 75000,
      cloudCosts: 30000,
      licenseCosts: 5000,
      grossProfit: 10000,
      marginPercentage: 8.3,
      burnRate: 35000,
      aiSuggestions: [
        "High GPU/LLM token costs detected; implement caching for common queries.",
        "Review squad allocation: Senior dev hours are exceeding budget for R&D.",
        "Switch to a tiered API plan for OpenAI/Vertex AI to stabilize costs."
      ]
    },
    scope: {
      objectives: ['Automate 40% of support tickets', 'Improve CSAT scores'],
      deliverables: ['LLM Integration', 'Knowledge Base Sync', 'Admin Dashboard'],
      risks: ['Hallucination management', 'Privacy compliance'],
      timeline: [
        { phase: 'Model Selection', duration: '2 weeks' },
        { phase: 'Training', duration: '4 weeks' }
      ]
    },
    delivery: {
      ...createMockDelivery('PRJ-002'),
      sprints: [],
      velocity: 22,
      blockers: ['API Quota Reached']
    }
  },
  {
    id: 'PRJ-003',
    title: 'Cloud Infrastructure Migration',
    description: 'Moving on-premise servers to a multi-cloud environment using AWS and Azure.',
    duration: '12 months',
    industry: 'IT Services',
    status: 'Active',
    progress: 15,
    budgetUtilization: 10,
    health: 'On Track',
    startDate: '2024-04-10',
    endDate: '2025-04-10',
    plData: {
      revenue: 500000,
      laborCosts: 180000,
      cloudCosts: 120000,
      licenseCosts: 50000,
      grossProfit: 150000,
      marginPercentage: 30,
      burnRate: 29000,
      aiSuggestions: [
        "Leverage AWS Savings Plans for the target production environment.",
        "Monitor data egress fees during the migration phase.",
        "Automate environment teardown for non-production hours."
      ]
    },
    delivery: {
      ...createMockDelivery('PRJ-003'),
      sprints: [],
      velocity: 40,
      blockers: []
    }
  }
];
