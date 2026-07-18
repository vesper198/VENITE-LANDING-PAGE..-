/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { College, Benefit, AdmissionStep, Testimonial, FaqItem } from './types';

export const COLLEGES_DATA: College[] = [
  {
    id: 'medicine-health',
    name: 'College of Medicine and Health Sciences',
    description: 'Equipping future healthcare leaders with advanced medical knowledge, clinical skills, and professional ethics.',
    iconName: 'HeartPulse',
    programmes: [
      'Nursing Science (NUC Full Accreditation)',
      'Medical Laboratory Science',
      'Public Health',
      'Medicine and Surgery (where applicable)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800'
  },
  {
    id: 'agriculture',
    name: 'College of Agriculture',
    description: 'Driving sustainable food security, agro-innovation, and resource management through practical farm experience.',
    iconName: 'Sprout',
    programmes: [
      'Agricultural Economics',
      'Animal Science',
      'Crop Science',
      'Fisheries and Aquaculture'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?q=80&w=800'
  },
  {
    id: 'computing-sciences',
    name: 'College of Computing, Engineering & Sciences',
    description: 'Nurturing innovators and critical thinkers in technology, software, microbiology, and engineered solutions.',
    iconName: 'Cpu',
    programmes: [
      'Computer Science',
      'Cyber Security',
      'Software Engineering',
      'Information Technology',
      'Biochemistry',
      'Microbiology',
      'Engineering Programmes'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800'
  },
  {
    id: 'arts-social-management',
    name: 'College of Arts, Social & Management Sciences',
    description: 'Fostering excellence in business management, governance, communications, and social policy development.',
    iconName: 'Building2',
    programmes: [
      'Accounting',
      'Economics',
      'Business Administration',
      'Mass Communication',
      'Criminology and Security Studies',
      'International Relations',
      'Political Science',
      'History & International Studies'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800'
  }
];

export const BENEFITS_DATA: Benefit[] = [
  {
    title: 'Accredited Degree Programmes',
    description: 'Including NUC Full Accreditation for Nursing Science and other key accredited regulatory board approvals.',
    iconName: 'Award'
  },
  {
    title: 'Modern Learning Environment',
    description: 'State-of-the-art smart classrooms, advanced medical/scientific laboratories, high-speed ICT centers, and student innovation hubs.',
    iconName: 'School'
  },
  {
    title: 'Safe & Peaceful Campus',
    description: 'Nestled in the serene and secure environment of Iloro-Ekiti, offering an ideal setting for focused academic pursuit.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Career-Oriented Education',
    description: 'Fusing rigorous academics, entrepreneurship, leadership mentorship, and deep-seated moral values for global competitiveness.',
    iconName: 'Briefcase'
  }
];

export const ADMISSION_STEPS: AdmissionStep[] = [
  {
    step: 1,
    title: 'Admission Portal Visit',
    description: 'Access our custom, secure online portal at portal.venite.edu.ng to begin.'
  },
  {
    step: 2,
    title: 'Profile Creation',
    description: 'Create your unique candidate profile using a valid email address and phone number.'
  },
  {
    step: 3,
    title: 'Online Application',
    description: 'Fill in your academic records, personal information, and choice of college.'
  },
  {
    step: 4,
    title: 'Document Upload',
    description: 'Upload your WAEC/NECO results, UTME scorecard, passport photograph, and other credentials.'
  },
  {
    step: 5,
    title: 'Submit & Confirm',
    description: 'Review your submission, pay the processing fee, and submit to receive instant email confirmation.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: 'Olumide Adebayo',
    role: 'Parent of Nursing Student',
    text: 'The academic calendar at Venite is stable, and the standard of laboratory equipment in the Nursing department is second to none in this region. My daughter is thriving.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200'
  },
  {
    name: 'Chioma Nwachukwu',
    role: '300L Computer Science',
    text: 'Venite University has given me hands-on software development training. The lecturers are approachable and our tech clubs are highly active and encouraging.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200'
  },
  {
    name: 'Dr. (Mrs.) Elizabeth Johnson',
    role: 'Senior Lecturer, Health Sciences',
    text: 'We do not just lecture; we mentor. Venite University provides the space, digital toolkits, and backing needed to raise graduates who can stand high on any global stage.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    question: 'Are Venite University programmes NUC accredited?',
    answer: 'Yes! All undergraduate degree programmes are fully approved and accredited by the National Universities Commission (NUC), including specialized regulatory bodies like the Nursing and Midwifery Council of Nigeria (NMCN).'
  },
  {
    question: 'Where is Venite University located?',
    answer: 'Our main campus is located in the peaceful, serene, and academically conducive town of Iloro-Ekiti, Ekiti State, Nigeria.'
  },
  {
    question: 'What are the basic admission requirements?',
    answer: 'Candidates must possess five (5) O\'Level credit passes (including English Language and Mathematics) in relevant subjects at WAEC/NECO/NABTEB, and obtain the minimum required cut-off mark in the UTME (JAMB) for the respective year.'
  },
  {
    question: 'Does the university offer campus accommodation?',
    answer: 'Yes, Venite University provides modern, secure, and fully equipped on-campus hostel facilities with constant electricity, clean water supply, high-speed Wi-Fi, and 24/7 security patrol.'
  }
];

export const STATS_DATA = [
  { value: '100%', label: 'Accreditation Rate' },
  { value: '4', label: 'Dynamic Colleges' },
  { value: '25+', label: 'Modern Labs & Workshops' },
  { value: '15:1', label: 'Student-to-Faculty Ratio' }
];

export const WATERFALL_PHASES = [
  {
    phase: 'Phase 1',
    title: 'Requirements Analysis',
    description: 'Gathered information regarding Venite University’s academic colleges, accreditation milestones, admissions portal details, and student life guidelines.'
  },
  {
    phase: 'Phase 2',
    title: 'System Design',
    description: 'Designed highly polished wireframes, selected responsive visual grids, established color palette variables (Venite Blue & Gold), and defined navigational pathways.'
  },
  {
    phase: 'Phase 3',
    title: 'Development',
    description: 'Coded the interface using React 19, TypeScript, and Tailwind CSS v4, building modular components, custom interactive states, and an eye-safe light/dark theme toggle capsule.'
  },
  {
    phase: 'Phase 4',
    title: 'Testing',
    description: 'Validated full responsive scaling (mobile up to 4K displays), checked element contrast for accessibility guidelines, tested link routing, and simulated form submissions.'
  },
  {
    phase: 'Phase 5',
    title: 'Deployment',
    description: 'Prepared client-side static bundles and full-stack runtime server hooks, pushing the application live on the Google Cloud platform.'
  },
  {
    phase: 'Phase 6',
    title: 'Maintenance',
    description: 'Established feedback cycles for updating course modules, releasing fresh portal announcements, and maintaining peak website responsiveness.'
  }
];
