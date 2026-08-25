export interface Education {
  degree: string;
  field?: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  type: 'PG' | 'UG' | 'HSC' | 'SSLC';
  highlights?: string[];
}

export interface Internship {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  skillsGained: string[];
  category: 'Development' | 'Design' | 'Hardware/IoT' | 'Programming';
}

export interface Certificate {
  title: string;
  organization: string;
  date: string;
  category: 'Cloud & Data' | 'AI & Tech' | 'Programming' | 'Academic & Leadership';
  badgeColor?: string;
  credentialUrl?: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  year: string;
  category: 'AI & Learning' | 'Web Systems' | 'Full-Stack Apps' | 'Healthcare/AI';
  shortDescription: string;
  detailedDescription: string;
  keyFeatures: string[];
  techStack: string[];
  impact: string;
  status: 'Completed' | 'Active';
}

export interface Achievement {
  title: string;
  roleOrCategory: string;
  eventOrOrg: string;
  year: string;
  type: 'Award' | 'Leadership' | 'Competition' | 'Sports' | 'Community';
  description: string;
  highlightBadge?: string;
}

export const PERSONAL_INFO = {
  name: 'SWETHA J',
  role: 'MCA Candidate & Web Developer',
  tagline: 'Passionate about Web Development, Data Analytics, Artificial Intelligence, and IoT Innovations.',
  email: 'swethajayakumar72@gmail.com',
  phone: '+91 9025159820',
  github: 'https://github.com/gitswetha12',
  githubUsername: 'gitswetha12',
  linkedin: 'https://www.linkedin.com/in/swetha-jayakumar-354b4934b',
  linkedinUsername: 'swetha-jayakumar-354b4934b',
  location: 'Trichy & Mayiladuthurai, Tamil Nadu, India',
  about: `I am an enthusiastic Master of Computer Applications (MCA) student at Holy Cross College (Autonomous), Trichy, with a strong academic foundation in Computer Applications (BCA, CGPA 8.61). 

With a blend of hands-on internship experience across web creation, UI/UX, sensor technology, and Python, I have built real-world solutions ranging from college complaint portals and AICTE web platforms to AI-powered LMS and IoT-based Smart Irrigation research. I am eager to apply my technical and analytical skills to high-impact web development, data analytics, and AI development opportunities.`,
  availability: 'Available for Internships & Full-Time Web Development Roles (2026-2027)',
  quickStats: [
    { label: 'PG CGPA', value: '8.25' },
    { label: 'UG CGPA', value: '8.61' },
    { label: 'Key Projects', value: '6+' },
    { label: 'Certifications', value: '10+' },
    { label: 'Internships', value: '4' },
  ]
};

export const EDUCATION_DATA: Education[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    field: 'Computer Applications & Advanced Software Development',
    institution: 'Holy Cross College (Autonomous)',
    location: 'Trichy, Tamil Nadu',
    period: '2025 – 2027',
    score: 'CGPA: 8.25',
    type: 'PG',
    highlights: [
      'Active PG student developing advanced software projects & AI LMS',
      'Secretary of Mental Wellbeing Club (2026)',
      'Organized technical and department level events'
    ]
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    field: 'Computer Science & Software Fundamentals',
    institution: 'Seethalakshmi Ramaswami College (Autonomous)',
    location: 'Trichy, Tamil Nadu',
    period: '2022 – 2025',
    score: 'CGPA: 8.61',
    type: 'UG',
    highlights: [
      'Graduated with Distinction (8.61 CGPA)',
      'Completed concurrent 3-Year Diploma in Information Technology (DIT)',
      'Elected Student Council Member (SCM) in the College Students Union (2024-2025)',
      'Active NSS Volunteer (2022-2024)'
    ]
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    field: 'Computer Science & Mathematics Stream',
    institution: 'Sri Ramakrishna Matric. Hr. Sec. School',
    location: 'Mayiladuthurai, Tamil Nadu',
    period: '2020 – 2022',
    score: '82%',
    type: 'HSC',
    highlights: ['March past team leader', 'Active participant in school competitions']
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    field: 'General Academic Stream',
    institution: 'Sri Ramakrishna Matric. Hr. Sec. School',
    location: 'Mayiladuthurai, Tamil Nadu',
    period: '2019 – 2020',
    score: '80%',
    type: 'SSLC',
    highlights: ['Strong foundation in Science & Mathematics']
  }
];

export const INTERNSHIPS_DATA: Internship[] = [
  {
    title: 'Website Creation Intern',
    company: 'HCCERP',
    location: 'Trichy, Tamil Nadu',
    period: '02/02/2026 – 27/03/2026',
    description: 'Designed, developed, and maintained institution-grade portal systems and institutional web modules focusing on user accessibility, responsive layouts, and structured database records.',
    skillsGained: ['Web Development', 'PHP', 'HTML/CSS', 'Database Management', 'UI Implementation'],
    category: 'Development'
  },
  {
    title: 'Sensor Technology Intern',
    company: 'HCIICT, Holy Cross College',
    location: 'Trichy, Tamil Nadu',
    period: '01/09/2025 – 16/09/2025',
    description: 'Hands-on practical training with microcontrollers, IoT sensor calibration, automated data logging, and wireless signal processing for embedded real-time systems.',
    skillsGained: ['IoT Sensors', 'Hardware Integration', 'Automation', 'Signal Monitoring'],
    category: 'Hardware/IoT'
  },
  {
    title: 'UI/UX Design Intern',
    company: 'RTS Invention',
    location: 'Trichy, Tamil Nadu',
    period: '27/09/2023 – 02/10/2023',
    description: 'Conducted user research, wireframing, high-fidelity prototypes, and ergonomic interface workflows prioritizing visual hierarchy, user journey clarity, and accessibility standards.',
    skillsGained: ['UI/UX Design', 'Wireframing', 'User Flows', 'Prototyping'],
    category: 'Design'
  },
  {
    title: 'Python Basics Intern',
    company: 'Greensoft Groups',
    location: 'Trichy, Tamil Nadu',
    period: '29/01/2023',
    description: 'Intensive foundation in Python programming, algorithmic problem solving, structured data handling, and scripting fundamentals.',
    skillsGained: ['Python Core', 'Data Structures', 'Scripting', 'Logic Building'],
    category: 'Programming'
  }
];

export const RESEARCH_PAPER = {
  title: 'Smart Irrigation using IoT',
  conference: 'International Conference on Contemporary Trends in Computer Science (CTCS-2K24)',
  organizer: 'P.G and Research Department of Computer Science & Department of Information Technology',
  institution: 'J.J. College of Arts and Science (Autonomous), Pudukkottai',
  date: 'August 02, 2024',
  summary: 'Presented an empirical IoT research model integrating soil moisture, environmental temperature, and microcontroller-based automation to dynamically regulate water distribution, preventing water wastage and boosting agricultural crop yield through sensor intelligence.'
};

export const CERTIFICATES_DATA: Certificate[] = [
  {
    title: 'MongoDB Certified Specialist Course',
    organization: 'MongoDB',
    date: '12 August 2026',
    category: 'Cloud & Data',
    badgeColor: 'emerald',
    description: 'Document database modeling, aggregation frameworks, indexing, and NoSQL query optimization.'
  },
  {
    title: 'Introduction of Basic Azure Services',
    organization: 'Microsoft',
    date: '17 June 2026',
    category: 'Cloud & Data',
    badgeColor: 'blue',
    description: 'Core cloud computing concepts, Azure compute, storage, security, virtual networks, and management tools.'
  },
  {
    title: 'Web Analytics Certification',
    organization: 'Accenture',
    date: '9 June 2026',
    category: 'Cloud & Data',
    badgeColor: 'purple',
    description: 'Traffic analysis, user behavior tracking, funnel conversion metrics, and data-driven optimization.'
  },
  {
    title: 'Introduction to Power BI',
    organization: 'Microsoft',
    date: '2026',
    category: 'Cloud & Data',
    badgeColor: 'amber',
    description: 'Interactive dashboard creation, DAX queries, data transformations, and executive business visualizers.'
  },
  {
    title: 'Introduction to Python',
    organization: 'Saylor University',
    date: '2026',
    category: 'Programming',
    badgeColor: 'cyan',
    description: 'Object-oriented programming, data structures, algorithms, and computational problem solving.'
  },
  {
    title: 'Diploma in Information Technology (DIT)',
    organization: 'Seethalakshmi Ramaswami College & InfoSchool, Trichy',
    date: 'June 2022 – April 2025',
    category: 'Academic & Leadership',
    badgeColor: 'indigo',
    description: 'Comprehensive 3-year diploma covering computer systems, database design, software development, and networking.'
  },
  {
    title: 'Next Gen AI: Innovations and Impacts',
    organization: 'PG Dept of Computer Applications & HCIICT, Holy Cross College',
    date: '2025',
    category: 'AI & Tech',
    badgeColor: 'pink',
    description: 'Exploration of generative AI architectures, LLM tooling, neural paradigms, and ethical AI deployment.'
  },
  {
    title: 'Student Council Member (SCM) Certificate of Appreciation',
    organization: "College Students' Union, Seethalakshmi Ramaswami College",
    date: '2024 – 2025',
    category: 'Academic & Leadership',
    badgeColor: 'amber',
    description: 'Recognized for exemplary leadership, student body governance, and university-wide event coordination.'
  },
  {
    title: 'Professional Placement Training',
    organization: 'Seethalakshmi Ramaswami College, Trichy',
    date: '09/12/2024 – 13/12/2024',
    category: 'Academic & Leadership',
    badgeColor: 'teal',
    description: 'Intensive corporate readiness, aptitude mastery, technical interview drills, and communication.'
  },
  {
    title: 'National Service Scheme (NSS) Volunteer Certificate',
    organization: 'NSS Cell, Government of India / SRC',
    date: '2022 – 2024',
    category: 'Academic & Leadership',
    badgeColor: 'emerald',
    description: '2 years of dedicated community service, rural awareness camps, health drives, and social welfare projects.'
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    title: 'Best Innovator Award',
    roleOrCategory: 'Technical Innovation',
    eventOrOrg: 'Holy Cross College (Autonomous)',
    year: '2026',
    type: 'Award',
    description: 'Awarded for conceptualizing and developing innovative technical solutions and creative software applications.',
    highlightBadge: 'Prestigious Honor'
  },
  {
    title: 'Secretary of Mental Wellbeing Club',
    roleOrCategory: 'Institutional Leadership',
    eventOrOrg: 'Holy Cross College (Autonomous)',
    year: '2026',
    type: 'Leadership',
    description: 'Heading student wellness initiatives, peer support circles, mindfulness workshops, and campus welfare campaigns.',
    highlightBadge: 'Executive Post'
  },
  {
    title: '1st Place – Web Scintillator: Multimedia Presentation',
    roleOrCategory: 'Tech Competition',
    eventOrOrg: 'Holy Cross College (HCC)',
    year: '2025',
    type: 'Competition',
    description: 'Secured First Place for delivering a compelling multimedia presentation on modern digital technology trends.',
    highlightBadge: '1st Winner'
  },
  {
    title: '3rd Place – Web Scintillator: Idea Pitching',
    roleOrCategory: 'Innovation & Pitching',
    eventOrOrg: 'Holy Cross College (HCC)',
    year: '2025',
    type: 'Competition',
    description: 'Awarded 3rd place for pitching a viable technological solution to a panel of academic and industry judges.'
  },
  {
    title: '48-Hour Hackathon Participant',
    roleOrCategory: 'Hackathon & Rapid Prototyping',
    eventOrOrg: 'Sacred Heart College, Tiruppatur',
    year: '2025',
    type: 'Competition',
    description: 'Participated in a grueling 48-hour continuous software engineering hackathon solving real-time problem statements.'
  },
  {
    title: 'March Past Team Leader',
    roleOrCategory: 'Discipline & Leadership',
    eventOrOrg: 'Sri Ramakrishna Institution & College Events',
    year: '2022 – 2024',
    type: 'Leadership',
    description: 'Selected to lead the marching contingent, demonstrating high discipline, cadence synchronization, and team coordination.'
  },
  {
    title: 'Department Quiz Organizer',
    roleOrCategory: 'Technical Fest Organization',
    eventOrOrg: 'Department Level Tech Fest, Trichy',
    year: '2024',
    type: 'Leadership',
    description: 'Formulated questions, curated technical rounds, and hosted the annual computer science quiz for hundreds of participants.'
  },
  {
    title: 'Tamil Poem Writing Contest Organizer',
    roleOrCategory: 'Cultural Leadership',
    eventOrOrg: 'College Level Literary Fest',
    year: '2024',
    type: 'Leadership',
    description: 'Organized and conducted the campus-wide Tamil poetry competition promoting literary creativity and cultural heritage.'
  },
  {
    title: '1st Place in Ludo Championship',
    roleOrCategory: 'Strategic Gaming',
    eventOrOrg: 'College Sports Meet',
    year: '2024',
    type: 'Sports',
    description: 'Won the Championship in the competitive inter-department strategy tournament.'
  },
  {
    title: '3rd Place in Carrom Tournament',
    roleOrCategory: 'Indoor Sports',
    eventOrOrg: 'College Sports Meet',
    year: '2023',
    type: 'Sports',
    description: 'Secured 3rd place in the intra-college singles/doubles carrom championship.'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'smart-ai-lms',
    title: 'Smart AI LMS (Smartlearn)',
    year: '2026',
    category: 'AI & Learning',
    shortDescription: 'AI-powered centralized learning management system offering interactive aids, engaging course delivery, and adaptive user experience.',
    detailedDescription: 'Smartlearn is a modern, next-generation e-learning platform built to centralize coursework, multimedia notes, and automated learning assistance. It integrates intelligent aids to break down complex topics, track progress, and provide students with tailored educational insights.',
    keyFeatures: [
      'Centralized course curriculum and module management',
      'AI-assisted topic summarization & interactive study aids',
      'Comprehensive student analytics & progress trackers',
      'Interactive quiz modules with instant score computation'
    ],
    techStack: ['Python', 'AI Integration', 'HTML5/CSS3', 'SQL Database', 'Data Analytics'],
    impact: 'Streamlined educational access and provided dynamic learning support for collegiate learners.',
    status: 'Active'
  },
  {
    id: 'aicte-website',
    title: 'College AICTE Official Website',
    year: '2026',
    category: 'Web Systems',
    shortDescription: 'Developed and maintained the institution’s AICTE compliance and information portal to improve accessibility and digital management.',
    detailedDescription: 'Engineered an accessible, high-compliance institutional portal designed to host vital accreditation documents, faculty credentials, syllabus structures, and student resources in adherence to statutory AICTE criteria.',
    keyFeatures: [
      'Accessible document repository with indexed navigation',
      'Administrative upload portal for instant circular publication',
      'Responsive design across mobile and desktop devices',
      'Enhanced search index for regulatory compliance guidelines'
    ],
    techStack: ['PHP', 'HTML5', 'Tailwind CSS / CSS3', 'MySQL', 'JavaScript'],
    impact: 'Significantly enhanced institutional transparency, student information discovery, and audit readiness.',
    status: 'Completed'
  },
  {
    id: 'online-complaint-box',
    title: 'Online Complaint Box System',
    year: '2026',
    category: 'Web Systems',
    shortDescription: 'Digital grievance management and resolution system enabling anonymous, categorized feedback for college students and staff.',
    detailedDescription: 'Created a secure, user-friendly grievance logging portal that enables students to register academic, infrastructural, and hostel concerns. Includes role-based dashboards for administrators to triage, assign, and update status in real-time.',
    keyFeatures: [
      'Anonymous and authenticated ticket submission modes',
      'Automated ticket tracking numbers with status progression',
      'Admin triage dashboard with priority flagging',
      'Confidentiality measures preventing unauthorized access'
    ],
    techStack: ['PHP', 'SQL / MySQL', 'HTML5/CSS3', 'JavaScript'],
    impact: 'Fostered a secure, transparent communication bridge between students and college administration.',
    status: 'Completed'
  },
  {
    id: 'mental-health-chatbot',
    title: 'Mental Health & Wellness Chatbot',
    year: '2025',
    category: 'Healthcare/AI',
    shortDescription: 'Conversational wellness agent designed to provide supportive mental wellness dialogues, self-care prompts, and crisis hotline guidance.',
    detailedDescription: 'Developed a compassionate conversational assistant focused on de-escalation, mood check-ins, guided breathing exercises, and curated wellness resources. Designed with strict privacy standards for college student peace of mind.',
    keyFeatures: [
      'Intelligent keyword recognition for emotional sentiment detection',
      'Guided calming protocols and positive affirmation generator',
      'Emergency helpline repository and resource mapping',
      'Zero-retention chat privacy to safeguard student vulnerability'
    ],
    techStack: ['Python', 'Conversational AI / LLM Logic', 'HTML5/CSS', 'JavaScript'],
    impact: 'Served as an empathetic digital first-step for students seeking stress relief and emotional support.',
    status: 'Completed'
  },
  {
    id: 'ecommerce-platform',
    title: 'Full-Stack E-Commerce Website',
    year: '2025',
    category: 'Full-Stack Apps',
    shortDescription: 'Modern e-commerce platform allowing users to browse dynamic product catalogs, manage cart inventories, and complete secure checkout flows.',
    detailedDescription: 'Built an interactive shopping portal featuring category filters, search capabilities, real-time cart state management, discount coupon verification, and simulated payment gateway checkout.',
    keyFeatures: [
      'Interactive product catalog with real-time stock status',
      'Persistent shopping cart with dynamic total/tax calculation',
      'Checkout form validation with shipping address confirmation',
      'Order history summary and simulated receipt generation'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'PHP / Backend API', 'SQL'],
    impact: 'Delivered an intuitive, responsive consumer buying experience with smooth order completion.',
    status: 'Completed'
  },
  {
    id: 'flight-booking-system',
    title: 'Flight Ticket Booking System',
    year: '2025',
    category: 'Full-Stack Apps',
    shortDescription: 'Reservation application that enables travelers to search routes, select cabins/seats, and confirm flight schedules efficiently.',
    detailedDescription: 'Developed a comprehensive flight booking engine handling source-to-destination searches, multi-class cabin filtering, dynamic pricing, passenger details registration, and e-boarding pass generation.',
    keyFeatures: [
      'Fast flight search by origin, destination, and departure date',
      'Interactive seat layout selector with class differentiation',
      'Passenger manifest logging and validation',
      'Digital booking reference and e-ticket generation'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'SQL'],
    impact: 'Simplified complex travel scheduling into a 3-step rapid booking workflow.',
    status: 'Completed'
  }
];

export const SKILLS_DATA = {
  programming: [
    { name: 'HTML / HTML5', level: 95, tag: 'Frontend Foundation' },
    { name: 'Python', level: 90, tag: 'Backend & Data Logic' },
    { name: 'SQL', level: 88, tag: 'Relational Queries & DB' },
    { name: 'PHP', level: 85, tag: 'Server-Side Development' },
    { name: 'JavaScript / ES6', level: 82, tag: 'Interactive UI' },
    { name: 'CSS3 / Tailwind CSS', level: 90, tag: 'Modern Styling' },
  ],
  aiAndTools: [
    { name: 'ChatGPT Prompting', tag: 'Generative AI' },
    { name: 'Claude AI', tag: 'Logic & Code Synthesis' },
    { name: 'Grok', tag: 'Real-time AI Insights' },
    { name: 'Edu Arena', tag: 'Educational EdTech' },
    { name: 'Power BI', tag: 'BI & Executive Dashboards' },
    { name: 'Web Analytics', tag: 'Traffic & Funnels (Accenture)' },
  ],
  cloudAndDatabases: [
    { name: 'MongoDB', tag: 'NoSQL Document Store' },
    { name: 'Microsoft Azure', tag: 'Cloud Compute & Storage' },
    { name: 'MySQL / SQL Server', tag: 'RDBMS Architecture' },
    { name: 'IoT Sensors & Hardware', tag: 'Embedded Devices' },
  ],
  officeAndProductivity: [
    { name: 'Microsoft Excel (Advanced Formulas & Pivot)', tag: 'Data Handling' },
    { name: 'Microsoft PowerPoint', tag: 'Visual Storytelling' },
    { name: 'Microsoft Word', tag: 'Documentation' },
  ],
  domains: [
    { name: 'Web Development', desc: 'Full-cycle responsive web systems and interactive portals' },
    { name: 'Data Analytics', desc: 'Transforming raw metrics into actionable visual dashboards' },
    { name: 'Artificial Intelligence', desc: 'LLM integration, chatbots, and next-gen AI LMS architectures' },
    { name: 'Data Visualization', desc: 'Executive visual reporting with Power BI and modern charts' },
    { name: 'IoT & Embedded Tech', desc: 'Smart sensors, automated irrigation, and hardware telemetry' },
  ]
};

export const WORKSHOPS_DATA = [
  {
    title: 'Two-Day National Level Workshop',
    institution: 'Jamal Mohamed College (Autonomous), Trichy',
    year: '2026',
    focus: 'Emerging trends in software architectures, computing paradigms, and next-generation frameworks.',
  }
];
