export interface VCFund {
  name: string;
  logo?: string;
  description: string;
  website: string;
  size?: string;
  focus?: string[];
  languages?: string[];
}

export const vcFunds: VCFund[] = [
  {
    name: "LAUNCHub Ventures",
    logo: "/fund-logos/LAUNCHub.png",
    description: "One of the leading early-stage VCs in SEE with €74M under management, focusing on B2B SaaS, Fintech, and Proptech startups.",
    website: "https://launchub.com",
    size: "€74M",
    focus: ["B2B SaaS", "Fintech", "Proptech"],
    languages: ["English", "Bulgarian", "Romanian", "Greek"]
  },
  {
    name: "Eleven Ventures",
    logo: "/fund-logos/11.png",
    description: "Early-stage VC fund supporting founders in SEE with pre-seed to Series A investments across various tech sectors.",
    website: "https://11.me",
    size: "€55M",
    focus: ["Fintech", "Healthcare", "Future of Work"],
    languages: ["English", "Bulgarian", "Romanian", "Serbian"]
  },
  {
    name: "Innovation Capital",
    logo: "/fund-logos/innovation.png",
    description: "Venture capital fund with €21.1M focused on early-stage tech companies in Bulgaria and the region.",
    website: "https://innovationcapital.bg",
    size: "€21.1M",
    focus: ["SaaS", "Marketplace", "Digital Health"],
    languages: ["English", "Bulgarian"]
  },
  {
    name: "Vitosha Venture Partners",
    logo: "/fund-logos/Vitosha.png",
    description: "A €100M fund supporting early-stage startups in Bulgaria with investments from pre-seed to Series A.",
    website: "https://vitosha.vc",
    size: "€100M",
    focus: ["Deep Tech", "SaaS", "Marketplace"],
    languages: ["English", "Bulgarian"]
  },
  {
    name: "Morningside Hill",
    logo: "/fund-logos/MORNINGSIDE.png",
    description: "Venture capital fund with €25M under management, focusing on early-stage tech companies in Bulgaria.",
    website: "https://morningsidehill.com",
    size: "€25M",
    focus: ["B2B SaaS", "Marketplace"],
    languages: ["English", "Bulgarian"]
  },
  {
    name: "BrightCap Ventures",
    logo: "/fund-logos/Brightcap.png",
    description: "Early-stage VC fund with €40M investing in B2B software and deep tech startups from SEE.",
    website: "https://brightcap.vc",
    size: "€40M",
    focus: ["B2B Software", "Deep Tech"],
    languages: ["English", "Bulgarian"]
  },
  {
    name: "NV3",
    logo: "/fund-logos/New-Vision-3.png",
    description: "Venture capital fund focused on early-stage tech investments in Bulgaria and CEE region.",
    website: "https://nv3.vc",
    size: "€25M",
    focus: ["Tech", "Software"],
    languages: ["English", "Bulgarian"]
  },
  {
    name: "Silverline Capital",
    logo: "/fund-logos/SILVERLINE.png",
    description: "Growth equity fund supporting established tech companies in Bulgaria and SEE.",
    website: "https://silverlinecapital.eu",
    size: "€42M",
    focus: ["Growth Stage", "Tech"],
    languages: ["English", "Bulgarian"]
  },
  {
    name: "Impetus Capital",
    logo: "/fund-logos/impetus.png",
    description: "Private equity and venture capital fund investing in Bulgarian SMEs and tech companies.",
    website: "https://impetuscapital.bg",
    size: "€30M",
    focus: ["SMEs", "Tech"],
    languages: ["English", "Bulgarian"]
  },
  {
    name: "Invenio Partners",
    logo: "/fund-logos/invenio.png",
    description: "Venture capital firm investing in early-stage tech startups in Bulgaria and the region.",
    website: "https://inveniopartners.vc",
    size: "€15M",
    focus: ["Tech", "Early-stage"],
    languages: ["English", "Bulgarian"]
  },
  {
    name: "Endeavor Catalyst",
    logo: "/fund-logos/Endeavor.png",
    description: "Co-investment fund that supports Endeavor Entrepreneurs globally, including Bulgarian scale-ups.",
    website: "https://endeavor.org/catalyst",
    size: "€250M",
    focus: ["Scale-ups", "Global"],
    languages: ["English"]
  },
  {
    name: "BlackPeak Capital",
    logo: "/fund-logos/black-peak.png",
    description: "Private equity fund focused on growth investments in SMEs across Southeast Europe.",
    website: "https://blackpeak-capital.com",
    size: "€126M",
    focus: ["Growth Equity", "SMEs"],
    languages: ["English", "Bulgarian"]
  },
  {
    name: "Empower Capital",
    logo: "/fund-logos/Empower.png",
    description: "Private equity fund supporting growth-stage companies in Bulgaria with sustainable business models.",
    website: "https://empowercapital.net",
    size: "€21M",
    focus: ["Growth Stage", "Sustainability"],
    languages: ["English", "Bulgarian"]
  },
  {
    name: "New Vision 3",
    logo: "/fund-logos/New-Vision-3.png",
    description: "Venture capital fund investing in early-stage tech startups in Bulgaria and the region.",
    website: "https://newvision3.com",
    size: "€25M",
    focus: ["Tech", "Early-stage"],
    languages: ["English", "Bulgarian"]
  },
  {
    name: "Rosslyn Capital Partners",
    logo: "/fund-logos/Rosslyn.png",
    description: "Private equity fund focused on mid-market companies in Bulgaria and SEE.",
    website: "https://rosslyncp.com",
    size: "€30M",
    focus: ["Mid-market", "Traditional Industries"],
    languages: ["English", "Bulgarian"]
  },
  {
    name: "Unicredit Bulbank",
    logo: "/fund-logos/UniCredit.png",
    description: "Corporate venture arm of UniCredit Bulbank supporting fintech and digital innovation.",
    website: "https://unicreditbulbank.bg",
    focus: ["Fintech", "Digital Innovation"],
    languages: ["English", "Bulgarian"]
  },
  {
    name: "Postscriptum Ventures",
    logo: "/fund-logos/PostScriptum.png",
    description: "Early-stage venture capital fund focusing on tech startups in Bulgaria and CEE.",
    website: "https://postscriptum.vc",
    size: "€12M",
    focus: ["Tech", "Early-stage"],
    languages: ["English", "Bulgarian"]
  },
  {
    name: "Hoxton Ventures",
    logo: "/fund-logos/hoxton.png",
    description: "European early-stage VC fund that has invested in Bulgarian startups like Payhawk.",
    website: "https://www.hoxton.vc",
    size: "€215M",
    focus: ["Early-stage", "Tech"],
    languages: ["English"]
  },
  {
    name: "Earlybird Venture Capital",
    logo: "/fund-logos/earlybird.png",
    description: "European VC investing in tech companies across Europe, including Bulgarian startups.",
    website: "https://earlybird.com",
    size: "€1.5B",
    focus: ["Digital Tech", "Health Tech"],
    languages: ["English", "German"]
  },
  {
    name: "Speedinvest",
    logo: "/fund-logos/Speedinvest.png",
    description: "European early-stage VC fund with investments in Bulgarian startups.",
    website: "https://speedinvest.com",
    size: "€600M",
    focus: ["Fintech", "Deep Tech", "SaaS"],
    languages: ["English", "German"]
  },
  {
    name: "Startup Wise Guys",
    logo: "/fund-logos/Startup-Wise-Guys.png",
    description: "B2B accelerator and early-stage investor active in Bulgaria and CEE.",
    website: "https://startupwiseguys.com",
    size: "€50M",
    focus: ["B2B SaaS", "Fintech", "Cybersecurity"],
    languages: ["English"]
  },
  {
    name: "Fil Rouge Capital",
    logo: "/fund-logos/Fil-Rouge-Capital.png",
    description: "VC fund investing in early-stage startups in the Balkans region.",
    website: "https://filrougecapital.com",
    size: "€45M",
    focus: ["Tech", "Early-stage"],
    languages: ["English", "Croatian"]
  },
  {
    name: "Fiedler Capital",
    logo: "/fund-logos/Fiedler-Capital.png",
    description: "Early-stage VC fund investing in tech startups in CEE region.",
    website: "https://fiedlercapital.com",
    size: "€10M",
    focus: ["Tech", "Early-stage"],
    languages: ["English", "Hungarian"]
  },
  {
    name: "Bayena Ventures",
    logo: null,
    description: "Newly established VC fund in Bulgaria focused on early-stage tech investments.",
    website: "https://bayena.vc",
    size: "€20M",
    focus: ["Tech", "Early-stage"],
    languages: ["English", "Bulgarian"]
  },
  {
    name: "Sopharma Ventures",
    logo: "/fund-logos/sopharma.png",
    description: "Corporate venture fund by Sopharma focusing on healthcare, biotech, and pharmaceutical innovations.",
    website: "https://sopharmaventures.com",
    size: "€10M",
    focus: ["Healthcare", "Biotech", "Pharmaceuticals"],
    languages: ["English", "Bulgarian"]
  }
];
