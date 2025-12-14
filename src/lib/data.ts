
export type Project = {
  id: number;
  title: string;
  category: 'Web App' | 'Mobile App' | 'Design';
  description: string;
  longDescription: string;
  images: {
    thumbnail: string;
    all: string[];
  };
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'CreativeHub',
    category: 'Web App',
    description:
      'A social platform for artists and designers to share their work.',
    longDescription:
      'CreativeHub is a full-featured social platform built with the MERN stack. It allows users to create profiles, upload their creative work, follow other artists, and engage with the community through comments and likes. The platform is designed to be highly interactive and visually appealing, with a focus on user experience.',
    images: {
      thumbnail: 'https://imgplaceholder.com/600x400/FF6B6B/FFFFFF?text=CreativeHub',
      all: [
        'https://imgplaceholder.com/1200x800/FF6B6B/FFFFFF?text=CreativeHub+1',
        'https://imgplaceholder.com/1200x800/FF6B6B/FFFFFF?text=CreativeHub+2',
        'https://imgplaceholder.com/1200x800/FF6B6B/FFFFFF?text=CreativeHub+3',
      ],
    },
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Portfolio Redesign',
    category: 'Design',
    description:
      'A complete UI/UX redesign for a personal portfolio website.',
    longDescription:
      'This project involved a complete overhaul of a personal portfolio website, focusing on modern design principles, improved user experience, and mobile responsiveness. The process included wireframing, prototyping in Figma, and developing a comprehensive design system.',
    images: {
      thumbnail: 'https://imgplaceholder.com/600x400/4ECDC4/FFFFFF?text=Portfolio+Redesign',
      all: [
        'https://imgplaceholder.com/1200x800/4ECDC4/FFFFFF?text=Portfolio+Redesign+1',
        'https://imgplaceholder.com/1200x800/4ECDC4/FFFFFF?text=Portfolio+Redesign+2',
      ],
    },
    techStack: ['Figma', 'Adobe XD', 'User Research'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'TaskFlow',
    category: 'Mobile App',
    description: 'A sleek and intuitive task management app for iOS and Android.',
    longDescription:
      'TaskFlow is a cross-platform mobile application developed with React Native. It helps users organize their tasks, set priorities, and track their progress. Key features include push notifications, offline support with data synchronization, and a minimalist user interface.',
    images: {
      thumbnail: 'https://imgplaceholder.com/600x400/95E1D3/FFFFFF?text=TaskFlow',
      all: [
        'https://imgplaceholder.com/800x1200/95E1D3/FFFFFF?text=TaskFlow+1',
        'https://imgplaceholder.com/800x1200/95E1D3/FFFFFF?text=TaskFlow+2',
        'https://imgplaceholder.com/800x1200/95E1D3/FFFFFF?text=TaskFlow+3',
      ],
    },
    techStack: ['React Native', 'Firebase', 'Redux', 'Styled Components'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'DataViz Dashboard',
    category: 'Web App',
    description: 'An interactive dashboard for visualizing complex datasets.',
    longDescription:
      'This web application provides an interactive interface for exploring and visualizing large datasets. Built with D3.js and React, it offers various chart types, filtering options, and the ability to export visualizations. It is designed to help data analysts and business intelligence professionals gain insights from their data quickly.',
    images: {
      thumbnail: 'https://imgplaceholder.com/600x400/F38181/FFFFFF?text=DataViz+Dashboard',
      all: [
        'https://imgplaceholder.com/1200x800/F38181/FFFFFF?text=DataViz+Dashboard+1',
        'https://imgplaceholder.com/1200x800/F38181/FFFFFF?text=DataViz+Dashboard+2',
      ],
    },
    techStack: ['React', 'D3.js', 'Python', 'Flask', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export type Skill = {
  name: string;
  level: number;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export const skillsByCategory: SkillCategory[] = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 88 },
    ],
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 80 },
      { name: 'Express.js', level: 85 },
      { name: 'GraphQL', level: 75 },
    ],
  },
  {
    category: 'Database Management',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'PostgreSQL', level: 75 },
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'Docker', level: 85 },
      { name: 'VS Code', level: 90 },
    ],
  },
  {
    category: 'UI/UX Design',
    skills: [{ name: 'Figma', level: 90 }],
  },
  {
    category: 'Mobile Development',
    skills: [{ name: 'React Native', level: 80 }],
  },
];

export const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'GraphQL',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'Figma',
  'UI/UX Design',
];

export const services = [
  {
    icon: 'Code',
    title: 'Web Development',
    description:
      'I create responsive, modern websites using the latest technologies and best practices. From concept to deployment, I ensure your website looks great and performs perfectly.',
    tags: ['Responsive Design', 'Performance Optimized', 'SEO Friendly'],
  },
  {
    icon: 'Smartphone',
    title: 'Mobile Development',
    description:
      'Building cross-platform mobile applications that work seamlessly on both iOS and Android devices using modern frameworks and tools.',
    tags: ['Cross-Platform', 'Native Performance', 'User-Friendly'],
  },
  {
    icon: 'Paintbrush',
    title: 'UI/UX Design',
    description:
      'Designing intuitive and beautiful user interfaces that provide exceptional user experiences. I focus on usability, accessibility, and visual appeal.',
    tags: ['User-Centered', 'Modern Design', 'Accessibility'],
  },
];


export type Achievement = {
  icon: string;
  title: string;
  description: string;
  source: string;
  imageUrl: string;
};

export const achievements: Achievement[] = [
  {
    icon: 'Github',
    title: 'Top 1% on GitHub',
    description: 'Recognized as a top contributor on GitHub for consistent and impactful open-source work.',
    source: 'GitHub Annual Review',
    imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop'
  },
  {
    icon: 'Trophy',
    title: 'Hackathon Winner',
    description: 'First place winner at the 2023 National Innovation Hackathon for a project on sustainable tech.',
    source: 'InnovateCorp',
    imageUrl: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=400&fit=crop'
  },
  {
    icon: 'BookOpen',
    title: 'Published Technical Author',
    description: 'Authored a popular article on "Modern Frontend Architectures" for a leading tech publication.',
    source: 'TechReads',
    imageUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600&h=400&fit=crop'
  },
];
