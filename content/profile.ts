import type { GalleryImage } from "@/components/ui/image-stack-gallery";

export const profile = {
  name: "Anshul Kumar Yadav",
  shortName: "Anshul",
  email: "anshul.4ky@gmail.com",
  location: "Mumbai, India",
  roleTag:
    "Research Staff, KCDH IIT Bombay · Member of Technical Staff, Radai",
  links: {
    linkedin: "https://www.linkedin.com/in/anshulky/",
    scholar:
      "https://scholar.google.com/citations?hl=en&user=dUyyCvgAAAAJ&view_op=list_works",
    github: "https://github.com/Anshulky",
    orcid: "https://orcid.org/0000-0002-1950-7165",
    cv: "/CV_Anshul.pdf",
  },
};

export type Product = {
  name: string;
  tagline: string;
  summary: string;
  shaped: string[];
  imageFolder: string;
  images?: GalleryImage[];
};

export const products: Product[] = [
  {
    name: "MammoQ: Cues that Matter",
    tagline: "Tech Lead",
    summary:
      "AI breast screening for quality assessment, abnormality findings, density grading, and patient prioritization.",
    shaped: [
      "Breast cancer incidence in India is rising steadily due to changing demographics and lifestyle patterns, with nearly one in four cancers diagnosed in women where most cases still detected at an advanced stage. MammoQ is a cost-effective, explainable, and regulation-ready AI solution tailored to the Indian healthcare ecosystem.",
      "I lead AI & Engineering end-to-end. Currently, I'm working to expand pathology coverage and subclassify pathologies per BI-RADS standards. I'm also driving validation of Version 1 across multiple datasets.",
      "The software has won multiple grants, including the India AI NCG CATCH Grant and the DISHA Award for Recognized Technologies in Digital Health.",
    ],
    imageFolder: "mammoq",
  },
  {
    name: "Luminary",
    tagline: "Tech Lead",
    summary:
      "Localises tumour regions and predicts breast cancer receptor status and molecular subtype from MRI.",
    shaped: [
      "Existing methods for breast cancer subtype identification rely on biopsy which is invasive, costly, and unsuitable for routine monitoring. Luminary addresses this key gap in oncology diagnostics through non-invasive, vendor-neutral, and affordable characterization of breast cancer subtypes.",
      "I lead the AI efforts with a team of enthusiastic ML engineers, currently working to mature the platform into robust software and prepare it for validation across a multi-country, multi-institute cohort.",
      "The software has won Wadhwani Research grant, supporting its ongoing development.",
    ],
    imageFolder: "luminary",
  },
];

export type Paper = {
  title: string;
  venue: string;
  year: number;
  authors: string;
  firstAuthor?: boolean;
  note?: string;
  href?: string;
};

export const journalPapers: Paper[] = [
  {
    title:
      "Review on Advancing Agricultural Applications with Machine Learning assisted Cold Atmospheric Plasma",
    venue: "IEEE Transactions on Plasma Science",
    year: 2026,
    authors: "A. K. Yadav, et al.",
    firstAuthor: true,
    note: "Accepted",
  },
  {
    title:
      "A Cyber-Resilient Edge–Fog–Cloud Framework for Forecast-Driven Energy Management in Networked Microgrids.",
    venue: "IEEE Transactions on Industry Applications",
    year: 2026,
    authors: "V. S. Mahala, A. K. Yadav, et al.",
    firstAuthor: false,
    note: "Accepted",
    href: "https://ieeexplore.ieee.org/document/11717619"
  },
  {
    title:
      "Bi-Level Optimization Framework for Networked Microgrids With Forecasting and Uncertainty Analysis in an Edge–Fog–Cloud Architecture",
    venue: "IEEE Transactions on Industry Applications",
    year: 2025,
    authors: "V. S. Mahala, A. K. Yadav, et al.",
    firstAuthor: false,
    href: "https://ieeexplore.ieee.org/abstract/document/11441428",
  },
  {
    title:
      "Reconstructing degraded areas of old Indian Wall Paintings through Image Inpainting.",
    venue: "International Journal of Information Technology",
    year: 2025,
    authors: "A. K. Yadav, et al.",
    firstAuthor: true,
    href: "https://doi.org/10.1007/s41870-025-02746-z",
  },
  {
    title:
      "Assessment of Deep Learning algorithms for Damage Segmentation in Indian Murals.",
    venue: "International Journal of Arts and Technology",
    year: 2025,
    authors: "A. K. Yadav, et al.",
    firstAuthor: true,
    href: "https://doi.org/10.1504/ijart.2025.150017",
  },
  {
    title:
      "A Comprehensive review on technological breakthroughs in precision agriculture: IoT and emerging data analytics.",
    venue: "European Journal of Agronomy",
    year: 2025,
    authors: "A. K. Saini, A. K. Yadav, et al.",
    firstAuthor: false,
    href: "https://doi.org/10.1016/j.eja.2024.127440",
  },
  {
    title:
      "A Systematic Review on Energy Management for Redox Flow Batteries via Intelligent Data Processing.",
    venue: "Energy Storage",
    year: 2025,
    authors: "A. K. Yadav, et al.",
    firstAuthor: true,
    href: "https://doi.org/10.1002/est2.70267",
  },
  {
    title:
      "Deep learning-based framework for damage introduction and segmentation in ancient wall paintings.",
    venue: "SN Computer Science",
    year: 2025,
    authors: "A. K. Yadav, et al.",
    firstAuthor: true,
    href: "https://doi.org/10.1007/s42979-025-04695-7",
  },
];

export const conferencePapers: Paper[] = [
  {
    title:
      "Quality-Aware Clinical AI: IQA Preprocessing Pipeline for Point-of-Care Intraoral Imaging.",
    venue: "28th International Conference on Pattern Recognition (ICPR 2026)",
    year: 2026,
    authors: "A. K. Yadav, et al.",
    firstAuthor: true,
    href: "https://doi.org/10.1007/978-3-032-31933-3_37",
  },
  {
    title:
      "Evaluation of a ±5 kV Solid-state-based 200 ns duration Pulse Generator.",
    venue:
      "1st International Conference on Power Electronics Converters in Transportation and Energy Application",
    year: 2025,
    authors: "A. Ranjan, A. K. Yadav, et al.",
    firstAuthor: false,
    href: "https://doi.org/10.1109/stpec66316.2025.11490922",
  },
  {
    title:
      "Emission Based Energy Management Framework for Networked Microgrids using Edge-Fog Computing.",
    venue:
      "5th IEEE International Conference on Sustainable Energy and Future Electric Transportation (SEFET 2025)",
    year: 2025,
    authors: "V. S. Mahala, A. K. Yadav, et al.",
    firstAuthor: false,
    href: "https://doi.org/10.1109/sefet65155.2025.11255578",
  },
  {
    title:
      "Generalisable Predictive Maintenance in Additive Manufacturing using Machine Learning.",
    venue:
      "4th IEEE International Conference on Innovative Sustainable Computational Technologies",
    year: 2024,
    authors: "A. K. Yadav, et al.",
    firstAuthor: true,
    href: "https://doi.org/10.1109/cisct62494.2024.11134272",
  },
  {
    title:
      "Detecting Additive Manufacturing Anomalies with a Shallow Residual Convolution Network.",
    venue:
      "Unified International Conference on Emerging Technologies in Cyber-Physical Systems and Industrial AI (Unified 2024)",
    year: 2024,
    authors: "A. K. Yadav, et al.",
    firstAuthor: true,
    href: "https://doi.org/10.1007/978-3-031-95963-9_1",
  },
  {
    title: "Computing Framework for SoC Estimation using On-device Learning.",
    venue: "IEEE 11th Power India International Conference (PIICON 2024)",
    year: 2024,
    authors: "A. K. Yadav, et al.",
    firstAuthor: true,
    href: "https://doi.org/10.1109/piicon63519.2024.10995181",
  },
  {
    title:
      "Edge Computing enabled Battery State of Charge estimation using Tiny Machine Learning techniques.",
    venue:
      "IEEE International Conference on Power Electronics, Drives and Energy Systems (PEDES 2024)",
    year: 2024,
    authors: "A. K. Yadav, et al.",
    firstAuthor: true,
    href: "https://doi.org/10.1109/pedes61459.2024.10961505",
  },
  {
    title:
      "Bi-Level Optimization Framework for Energy Management in Networked Microgrid Using Edge-Fog Computing Paradigm.",
    venue:
      "IEEE International Conference on Power Electronics, Drives and Energy Systems (PEDES 2024)",
    year: 2024,
    authors: "V. S. Mahala, A. K. Yadav, et al.",
    firstAuthor: false,
    href: "https://doi.org/10.1109/pedes61459.2024.10961080",
  },
  {
    title:
      "Machine learning based data-driven approach for state-of-charge estimation in redox flow battery.",
    venue:
      "15th International IEEE Conference on Computing Communication and Networking Technologies (ICCCNT 2024)",
    year: 2024,
    authors: "A. K. Yadav, et al.",
    firstAuthor: true,
    href: "https://doi.org/10.1109/icccnt61001.2024.10726011",
  },
  {
    title: "Steel surface defect detection using machine learning techniques.",
    venue:
      "IEEE International Conference on Electronics, Communication and Signal Processing (ICESP 2024)",
    year: 2024,
    authors: "A. M. Dharwa, A. K. Yadav, et al.",
    firstAuthor: false,
    href: "https://doi.org/10.1109/icecsp61809.2024.10698084",
  },
  {
    title:
      "Uncertainty Estimation of PV and Load Using Deep Learning for Networked Microgrid.",
    venue:
      "4th IEEE International Conference on Sustainable Energy and Future Electric Transportation (SEFET 2024)",
    year: 2024,
    authors: "V. S. Mahala, A. K. Yadav, et al.",
    firstAuthor: false,
    href: "https://doi.org/10.1109/sefet61574.2024.10718218",
  },
  {
    title:
      "Uncertainty aware State-of-Charge estimation for Li-ion Batteries using Deep Learning.",
    venue:
      "2nd IEEE International Conference on Measurement, Instrumentation, Control, and Automation (ICMICA 2023)",
    year: 2023,
    authors: "A. K. Yadav, et al.",
    firstAuthor: true,
    href: "https://doi.org/10.1109/icmica61068.2024.10732706",
  },
  {
    title:
      "Revitalizing ancient murals in the Shekhawati region through image inpainting techniques.",
    venue:
      "11th IEEE International Conference on Signal Processing and Integrated Networks (SPIN 2024)",
    year: 2024,
    authors: "A. K. Yadav, et al.",
    firstAuthor: true,
    href: "https://doi.org/10.1109/spin60856.2024.10511302",
  },
  {
    title: "Seven Sisters Optimization Algorithm.",
    venue:
      "2nd IEEE International Conference on Futuristic Technologies (INCOFT 2023)",
    year: 2023,
    authors: "A. Saxena, A. K. Yadav, et al.",
    firstAuthor: false,
    href: "https://doi.org/10.1109/incoft60753.2023.10425483",
  },
  {
    title:
      "Data Driven Energy Management of Residential PV-Battery System Using Q-Learning.",
    venue:
      "IEEE International Conference on Recent Advances in Systems Science and Engineering (RASSE 2023)",
    year: 2023,
    authors: "K. Baberwal, A. K. Yadav, et al.",
    firstAuthor: false,
    href: "https://doi.org/10.1109/rasse60029.2023.10363461",
  },
  {
    title:
      "Networked Hybrid AC-DC Microgrids: Leveraging Fog Computing and Linear Solver for Efficient Energy Management.",
    venue:
      "IEEE International Conference on Recent Advances in Systems Science and Engineering (RASSE 2023)",
    year: 2023,
    authors: "V. S. Mahala, A. K. Yadav, et al.",
    firstAuthor: false,
    href: "https://doi.org/10.1109/rasse60029.2023.10363518",
  },
  {
    title:
      "Battery Energy Storage Sizing and Operational Strategy for Microgrid Considering Electric Vehicle.",
    venue:
      "3rd IEEE International Conference on Sustainable Energy and Future Electric Transportation (SEFET 2023)",
    year: 2023,
    authors: "N. Kumar, A. K. Yadav, et al.",
    firstAuthor: false,
    href: "https://doi.org/10.1109/sefet57834.2023.10245846",
  },
  {
    title: "Optimal Parameter Estimation of CAPN Model for Li-ion Battery.",
    venue:
      "IEEE International Conference on Computer, Electronics & Electrical Engineering & their Applications (IC2E3 2023)",
    year: 2023,
    authors: "S. Bharti, A. K. Yadav, et al.",
    firstAuthor: false,
    href: "https://doi.org/10.1109/ic2e357697.2023.10262727",
  },
  {
    title:
      "Optimization Scheme for Power Transmission in Wireless Sensor Network.",
    venue:
      "IEEE International Conference on Power, Instrumentation, Energy and Control (PIECON 2023)",
    year: 2023,
    authors: "A. K. Yadav, A. Sharma, et al.",
    firstAuthor: true,
    href: "https://doi.org/10.1109/piecon56912.2023.10085758",
  },
  {
    title:
      "Multi-Agent based Cloud Energy Storage Framework for Residential Community.",
    venue:
      "IEEE International Conference on Power Electronics, Drives and Energy Systems (PEDES 2022)",
    year: 2022,
    authors: "V. K. Saini, A. K. Yadav, et al.",
    firstAuthor: false,
    href: "https://doi.org/10.1109/pedes56012.2022.10080417",
  },
];

export type NewsItem = {
  title: string;
  body: string;
  date: string;
  imageFolder: string;
  href?: string;
  hrefLabel?: string;
  images?: GalleryImage[];
};

export const newsItems: NewsItem[] = [
  {
    title: "Paper Accepted in IEEE Transactions on Plasma Science",
    date: "Sep 2026",
    imageFolder: "",
    body: "Our paper on machine learning–assisted cold atmospheric plasma for agricultural applications was accepted in IEEE Transactions on Plasma Science.",
  },
  {
    title: "Paper Accepted in IEEE Transactions on Industry Applications",
    date: "Aug 2026",
    imageFolder: "",
    body: "Our paper on a cyber-resilient edge–fog–cloud framework for forecast-driven energy management in networked microgrids was accepted in IEEE Transactions on Industry Applications.",
  },
  {
    title: "ICPR 2026",
    date: "Aug 2026",
    imageFolder: "icpr",
    body: "Presented our quality-aware IQA preprocessing pipeline for point-of-care intraoral imaging at the 28th International Conference on Pattern Recognition.",
    href: "https://www.linkedin.com/posts/kcdh-iitb_kcdh-iitbombay-aidelab-activity-7505946097505255424-U4fk?utm_source=share&utm_medium=member_desktop&rcm=ACoAADtk3OYBjP_n9nYV0yUpFk7KYj2VQ71gYQo",
    hrefLabel: "LinkedIn",
  },
  {
    title: "Winner of the AI Innovation Challenge 2026",
    date: "Aug 2026",
    imageFolder: "Yashoda_innovation",
    body: "MammoQ was selected as a winner of the AI Innovation Challenge 2026, jointly hosted by Research and Innovation Circle of Hyderabad and Yashoda Hospitals.",
    href: "https://lnkd.in/p/dHwdxC_3",
    hrefLabel: "LinkedIn",
  },
  {
    title: "5th Annual CSR Conclave",
    date: "Aug 2026",
    imageFolder: "csr_conclave_iitb",
    body: "Represented KCDH at the 5th Annual CSR Conclave to present our work on MammoQ.",
    href: "https://www.linkedin.com/posts/kcdh-iitb_kcdh-digitalhealth-healthcareinnovation-activity-7472240752039809024-gcy1?utm_source=share&utm_medium=member_desktop&rcm=ACoAADtk3OYBjP_n9nYV0yUpFk7KYj2VQ71gYQo",
    hrefLabel: "LinkedIn",
  },
  {
    title: "Research grant",
    date: "2025",
    imageFolder: "grant",
    body: "MammoQ received a research grant from the Koita Foundation to support ongoing development.",
  },
];

export type TimelineRole = {
  period: string;
  title: string;
  detail: string;
  description: string;
};

export type TimelineEntry = {
  period: string;
  title: string;
  organisation: string;
  description: string;
  logo: string;
  href?: string;
  roles?: TimelineRole[];
};

export const experience: TimelineEntry[] = [
  {
    period: "April 2025 – Present",
    title: "Indian Institute of Technology Bombay",
    organisation:
      "Computer Science & Engineering, then Koita Centre for Digital Health",
    description:
      "Stepped from Project Technical Assistant in Computer Science & Engineering to Project Research Assistant at the Koita Centre for Digital Health.",
    logo: "/orgs/iitb.png",
    href: "https://www.iitb.ac.in/",
    roles: [
      {
        period: "July 2025 – Present",
        title: "Project Research Assistant",
        detail: "Koita Centre for Digital Health",
        description:
          "Building AI frameworks for healthcare imaging, including the MammoQ mammography pipeline: detection, density grading, clinical refinement, and observable orchestration.",
      },
      {
        period: "April 2025 – June 2025",
        title: "Project Technical Assistant",
        detail: "Department of Computer Science & Engineering",
        description:
          "Image quality assessment with TinyViT and MobileViT for low-resource healthcare settings, and semi-supervised learning to reduce annotation load.",
      },
    ],
  },
  {
    period: "August 2023 – March 2025",
    title: "Junior Research Fellow",
    organisation: "CSIR-CEERI, Pilani",
    description:
      "Mural damage segmentation and inpainting, redox-flow battery state-of-charge estimation with TinyML, additive-manufacturing anomaly detection, and X-ray baggage threat detection.",
    logo: "/orgs/ceeri.png",
    href: "https://www.ceeri.res.in/",
  },
  {
    period: "June 2022 – August 2023",
    title: "Research Intern",
    organisation: "Raman Lab, Jaipur",
    description:
      "Hybrid optimisation for smart-home and networked microgrid energy management, battery degradation modelling, and Q-learning for household energy use.",
    logo: "/orgs/raman.png",
    href: "https://ramanlab.co.in/"
  },
];

export const education: TimelineEntry[] = [
  {
    period: "August 2026 – Present",
    title: "Master's by Research, Healthcare Informatics",
    organisation: "Indian Institute of Technology Bombay",
    description:
      "Research focus on AI-based solutions for breast cancer screening.",
    logo: "/orgs/iitb.png",
    href: "https://www.iitb.ac.in/",
  },
  {
    period: "August 2019 – July 2023",
    title: "B.Tech. in Electrical Engineering",
    organisation:
      "Swami Keshvanand Institute of Technology, Management & Gramothan, Jaipur",
    description:
      "GPA 9.09/10, with distinction. Engineering project on smart grid technology.",
    logo: "/orgs/skit.png",
    href: "https://www.skit.ac.in/",
  },
];

export type ReadingPost = {
  title: string;
  date: string;
  author: string;
  href: string;
};

export const readingPosts: ReadingPost[] = [
  {
    title: "Using LLMs to Secure Source Code",
    date: "27 May 2026",
    author: "Eugene Yan",
    href: "https://eugeneyan.com/writing/secure-source-code/",
  },
  {
    title: "How to Work and Compound with AI",
    date: "03 May 2026",
    author: "Eugene Yan",
    href: "https://eugeneyan.com/writing/working-with-ai/",
  },
  {
    title: "2025 Year in Review",
    date: "14 Dec 2025",
    author: "Eugene Yan",
    href: "https://eugeneyan.com/writing/2025-review/",
  },
  {
    title: "Product Evals in Three Simple Steps",
    date: "23 Nov 2025",
    author: "Eugene Yan",
    href: "https://eugeneyan.com/writing/product-evals/",
  },
];
