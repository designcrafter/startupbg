export interface Startup {
  name: string;
  category: string;
  description: string;
  image: string;
  website: string;
  funding?: string;
  founded?: string;
  employees?: string;
  location?: string;
  longDescription?: string;
}

// Startups ordered by funding amount according to research document
export const startups: Startup[] = [
  { 
    name: "Hyperscience", 
    category: "AI", 
    description: "AI document processing - €267M funding",
    image: "/logos/Hyperscience.png",
    website: "https://hyperscience.com",
    funding: "€267M",
    founded: "2014",
    employees: "500+",
    location: "Sofia / New York",
    longDescription: "Hyperscience is an AI company specializing in intelligent document processing. Their platform automates data extraction from complex documents, helping enterprises reduce manual work and improve accuracy. With significant funding, they've become one of Bulgaria's most successful tech exports."
  },
  { 
    name: "Payhawk", 
    category: "Fintech", 
    description: "Corporate cards & expense management - €221M funding",
    image: "/logos/Payhawk.png",
    website: "https://payhawk.com",
    funding: "€221M",
    founded: "2018",
    employees: "300+",
    location: "Sofia / London",
    longDescription: "Payhawk is Bulgaria's first unicorn, providing an all-in-one financial solution that combines corporate cards, expense management, and bill payments. Their platform helps businesses streamline financial processes and gain better visibility into spending."
  },
  { 
    name: "Gtmhub", 
    category: "SaaS", 
    description: "OKR management platform - €148M funding",
    image: "/logos/Gtmhub.png",
    website: "https://gtmhub.com",
    funding: "€148M",
    founded: "2015",
    employees: "200+",
    location: "Sofia / Denver",
    longDescription: "Gtmhub is the world's most powerful platform for OKRs (Objectives and Key Results). Their software helps organizations align teams, measure progress, and achieve strategic goals. With substantial funding, they've expanded globally while maintaining strong Bulgarian roots."
  },
  { 
    name: "Dronamics", 
    category: "Logistics", 
    description: "Cargo drone delivery - €57.6M funding",
    image: "/logos/Dronamics.png",
    website: "https://dronamics.com",
    funding: "€57.6M",
    founded: "2014",
    employees: "100+",
    location: "Sofia / London",
    longDescription: "Dronamics is developing the world's first cargo drone airline. Their proprietary Black Swan drone can transport 350kg of cargo over 2,500km at up to 80% lower cost than traditional air freight, addressing middle-mile delivery challenges for e-commerce, pharma, and food supply chains."
  },
  { 
    name: "Ampeco", 
    category: "CleanTech", 
    description: "EV charging software - €41.5M funding",
    image: "/logos/Ampeco.png",
    website: "https://ampeco.com",
    funding: "€41.5M",
    founded: "2018",
    employees: "80+",
    location: "Sofia",
    longDescription: "Ampeco provides a white-label EV charging platform that enables businesses to launch and scale their own EV charging networks. Their software powers charging stations across Europe, helping accelerate the transition to sustainable transportation."
  },
  { 
    name: "Iris AI", 
    category: "AI", 
    description: "AI research assistant - €19M funding",
    image: "/logos/Iris.png",
    website: "https://iris.ai",
    funding: "€19M",
    founded: "2015",
    employees: "50+",
    location: "Sofia / Oslo",
    longDescription: "Iris AI develops artificial intelligence tools that help researchers find relevant scientific papers and extract insights from research. Their technology is used by universities and R&D departments to accelerate scientific discovery and innovation."
  },
  { 
    name: "Shelly Group", 
    category: "IoT", 
    description: "Smart home devices - Bulgaria's second unicorn",
    image: "/logos/Shelly.png",
    website: "https://shelly.com",
    funding: "IPO",
    founded: "2007",
    employees: "400+",
    location: "Sofia",
    longDescription: "Formerly Allterco, Shelly Group is a leading IoT company producing smart home devices that are affordable and easy to use. Their products include smart plugs, switches, sensors, and home automation solutions that have gained popularity across Europe and beyond."
  },
  { 
    name: "Chaos Group", 
    category: "3D", 
    description: "V-Ray rendering software",
    image: "/logos/Chaos.png",
    website: "https://chaos.com",
    founded: "1997",
    employees: "500+",
    location: "Sofia",
    longDescription: "Chaos Group (now Chaos) is a world leader in computer graphics technology, known for their V-Ray rendering software used in architecture, design, visual effects, and gaming. Their technology has been used in blockbuster films, award-winning architectural visualizations, and major game productions."
  },
  { 
    name: "Kelvin Health", 
    category: "Health", 
    description: "AI thermal imaging diagnostics",
    image: "/logos/Kelvin.png",
    website: "https://kelvin.health",
    funding: "€10M",
    founded: "2020",
    employees: "30+",
    location: "Sofia",
    longDescription: "Kelvin Health uses AI and thermal imaging to detect and monitor various health conditions. Their technology enables non-invasive screening and early detection of vascular issues, inflammation, and other medical conditions, making healthcare more accessible and preventative."
  },
  { 
    name: "Enhancv", 
    category: "HR Tech", 
    description: "Resume builder platform",
    image: "/logos/Enhancv.png",
    website: "https://enhancv.com",
    funding: "€1M+",
    founded: "2014",
    employees: "20+",
    location: "Sofia",
    longDescription: "Enhancv is a resume builder platform that helps job seekers create standout resumes that highlight their achievements and personality. Their user-friendly tools and templates have helped thousands of professionals land interviews at top companies worldwide."
  },
  { 
    name: "Imagga", 
    category: "AI", 
    description: "Image recognition API",
    image: "/logos/Imagga.png",
    website: "https://imagga.com",
    founded: "2008",
    employees: "20+",
    location: "Sofia",
    longDescription: "Imagga provides powerful image recognition APIs that enable automatic tagging, categorization, and content moderation. Their technology is used by businesses to organize and search through large image libraries, enhance user experiences, and automate visual content workflows."
  },
  { 
    name: "Telerik", 
    category: "Dev Tools", 
    description: "Software development tools",
    image: "/logos/Telerik.png",
    website: "https://www.telerik.com",
    funding: "Acquired by Progress for $262.5M",
    founded: "2002",
    employees: "800+ (pre-acquisition)",
    location: "Sofia",
    longDescription: "Telerik was Bulgaria's first major tech success story, developing UI components and tools for software developers. The company was acquired by Progress Software in 2014 for $262.5M, marking one of the largest tech exits in Bulgarian history and inspiring a generation of entrepreneurs."
  },
  { 
    name: "INSAIT", 
    category: "Research", 
    description: "Advanced AI research institute",
    image: "/logos/INSAIT.png",
    website: "https://insait.ai",
    funding: "€100M (grant)",
    founded: "2022",
    location: "Sofia",
    longDescription: "INSAIT is an advanced AI research institute established in partnership with ETH Zurich and EPFL. With substantial funding from the Bulgarian government and tech companies, it aims to establish Bulgaria as a leading AI research hub and prevent brain drain by providing world-class research opportunities."
  },
  { 
    name: "Coursedot", 
    category: "EdTech", 
    description: "IT training marketplace",
    image: "/logos/Coursedot.png",
    website: "https://coursedot.com",
    founded: "2015",
    employees: "15+",
    location: "Sofia",
    longDescription: "Coursedot is a marketplace connecting IT professionals with training opportunities. Their platform helps individuals and companies find specialized technical training courses and certified instructors across various IT domains, supporting professional development in the tech industry."
  },
  { 
    name: "Kanbanize", 
    category: "SaaS", 
    description: "Project management software",
    image: "/logos/Kanbanize.png",
    website: "https://kanbanize.com",
    founded: "2011",
    employees: "50+",
    location: "Sofia",
    longDescription: "Kanbanize is a Kanban-based project and portfolio management software that helps teams visualize workflows, optimize processes, and improve productivity. Their platform is used by organizations worldwide to implement agile methodologies and manage complex projects efficiently."
  },
  { 
    name: "Develiot", 
    category: "IoT", 
    description: "IoT solutions",
    image: "/logos/Develiot.png",
    website: "https://develiot.com",
    founded: "2018",
    employees: "20+",
    location: "Sofia",
    longDescription: "Develiot provides end-to-end IoT solutions for smart cities, utilities, and industrial applications. Their technology enables real-time monitoring and management of infrastructure, helping municipalities and businesses improve efficiency and sustainability."
  },
  { 
    name: "Transmetrics", 
    category: "Logistics", 
    description: "AI logistics optimization",
    image: "/logos/Transmetrics.png",
    website: "https://transmetrics.ai",
    funding: "€7M+",
    founded: "2013",
    employees: "30+",
    location: "Sofia",
    longDescription: "Transmetrics uses AI and predictive analytics to optimize logistics operations. Their platform helps shipping and transport companies predict demand, optimize capacity, and reduce costs by eliminating inefficiencies in cargo transportation networks."
  },
  { 
    name: "Pliant", 
    category: "Fintech", 
    description: "Business credit cards",
    image: "/logos/Pliant.png",
    website: "https://getpliant.com",
    funding: "€18M+",
    founded: "2020",
    employees: "40+",
    location: "Sofia / Berlin",
    longDescription: "Pliant offers smart corporate credit cards and expense management solutions for businesses. Their platform simplifies spending, automates expense reporting, and provides real-time visibility into company finances, helping businesses streamline financial operations."
  },
  { 
    name: "Efemarai", 
    category: "AI", 
    description: "AI visualization platform",
    image: "/logos/Efemarai.png",
    website: "https://efemarai.com",
    founded: "2018",
    employees: "15+",
    location: "Sofia",
    longDescription: "Efemarai develops tools for visualizing and debugging machine learning models. Their platform helps AI engineers understand complex neural networks, identify issues, and improve model performance, making AI development more transparent and efficient."
  },
  { 
    name: "Colibra", 
    category: "Digital Rights", 
    description: "Digital rights management",
    image: "/logos/Colibra.png",
    website: "https://colibra.ai",
    founded: "2019",
    employees: "20+",
    location: "Sofia",
    longDescription: "Colibra is building a platform for managing digital rights and intellectual property. Their technology helps creators protect and monetize their work in the digital economy, ensuring fair compensation and proper attribution across various online platforms."
  }
];
