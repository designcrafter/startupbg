import { Badge } from "@/components/ui/badge";
import { AppButton } from "@/components/ui/app-button";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket } from "lucide-react";


// Startups ordered by funding amount according to research document
const startups = [
  { 
    name: "Hyperscience", 
    category: "AI", 
    description: "AI document processing - €267M funding",
    image: "/logos/Hyperscience.png",
    website: "https://hyperscience.com"
  },
  { 
    name: "Payhawk", 
    category: "Fintech", 
    description: "Corporate cards & expense management - €221M funding",
    image: "/logos/Payhawk.png",
    website: "https://payhawk.com"
  },
  { 
    name: "Gtmhub", 
    category: "SaaS", 
    description: "OKR management platform - €148M funding",
    image: "/logos/Gtmhub.png",
    website: "https://gtmhub.com"
  },
  { 
    name: "Dronamics", 
    category: "Logistics", 
    description: "Cargo drone delivery - €57.6M funding",
    image: "/logos/Dronamics.png",
    website: "https://dronamics.com"
  },
  { 
    name: "Ampeco", 
    category: "CleanTech", 
    description: "EV charging software - €41.5M funding",
    image: "/logos/Ampeco.png",
    website: "https://ampeco.com"
  },
  { 
    name: "Iris AI", 
    category: "AI", 
    description: "AI research assistant - €19M funding",
    image: "/logos/Iris.png",
    website: "https://iris.ai"
  },
  { 
    name: "Shelly Group", 
    category: "IoT", 
    description: "Smart home devices - Bulgaria's second unicorn",
    image: "/logos/Shelly.png",
    website: "https://shelly.com"
  },
  { 
    name: "Chaos Group", 
    category: "3D", 
    description: "V-Ray rendering software",
    image: "/logos/Chaos.png",
    website: "https://chaos.com"
  },
  { 
    name: "Kelvin Health", 
    category: "Health", 
    description: "AI thermal imaging diagnostics",
    image: "/logos/Kelvin.png",
    website: "https://kelvin.health"
  },
  { 
    name: "Enhancv", 
    category: "HR Tech", 
    description: "Resume builder platform",
    image: "/logos/Enhancv.png",
    website: "https://enhancv.com"
  },
  { 
    name: "Imagga", 
    category: "AI", 
    description: "Image recognition API",
    image: "/logos/Imagga.png",
    website: "https://imagga.com"
  },
  { 
    name: "Telerik", 
    category: "Dev Tools", 
    description: "Software development tools",
    image: "/logos/Telerik.png",
    website: "https://www.telerik.com"
  },
  { 
    name: "INSAIT", 
    category: "Research", 
    description: "Advanced AI research institute",
    image: "/logos/INSAIT.png",
    website: "https://insait.ai"
  },
  { 
    name: "Coursedot", 
    category: "EdTech", 
    description: "IT training marketplace",
    image: "/logos/Coursedot.png",
    website: "https://coursedot.com"
  },
  { 
    name: "Kanbanize", 
    category: "SaaS", 
    description: "Project management software",
    image: "/logos/Kanbanize.png",
    website: "https://kanbanize.com"
  },
  { 
    name: "Develiot", 
    category: "IoT", 
    description: "IoT solutions",
    image: "/logos/Develiot.png",
    website: "https://develiot.com"
  },
  { 
    name: "Transmetrics", 
    category: "Logistics", 
    description: "AI logistics optimization",
    image: "/logos/Transmetrics.png",
    website: "https://transmetrics.ai"
  },
  { 
    name: "Pliant", 
    category: "Fintech", 
    description: "Business credit cards",
    image: "/logos/Pliant.png",
    website: "https://getpliant.com"
  },
  { 
    name: "Efemarai", 
    category: "AI", 
    description: "AI visualization platform",
    image: "/logos/Efemarai.png",
    website: "https://efemarai.com"
  },
  { 
    name: "Colibra", 
    category: "Digital Rights", 
    description: "Digital rights management",
    image: "/logos/Colibra.png",
    website: "https://colibra.ai"
  }
];

// Function to get category colors
const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    "AI": "bg-purple-50 text-purple-800 border-purple-200",
    "Fintech": "bg-green-50 text-green-800 border-green-200",
    "SaaS": "bg-blue-50 text-blue-800 border-blue-200",
    "Logistics": "bg-orange-50 text-orange-800 border-orange-200",
    "CleanTech": "bg-emerald-50 text-emerald-800 border-emerald-200",
    "IoT": "bg-cyan-50 text-cyan-800 border-cyan-200",
    "3D": "bg-pink-50 text-pink-800 border-pink-200",
    "Health": "bg-red-50 text-red-800 border-red-200",
    "HR Tech": "bg-indigo-50 text-indigo-800 border-indigo-200",
    "Dev Tools": "bg-gray-50 text-gray-800 border-gray-200",
    "Research": "bg-violet-50 text-violet-800 border-violet-200",
    "EdTech": "bg-amber-50 text-amber-800 border-amber-200",
    "Digital Rights": "bg-rose-50 text-rose-800 border-rose-200"
  };
  return colors[category] || "bg-gray-50 text-gray-800 border-gray-200";
};

const Startups = () => {
  return (
    <div className="min-h-screen bg-background">

      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Top Startups by Funding</h1>
          <p className="text-muted-foreground mt-1">Leading Bulgarian startups ranked by funding raised</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {startups.map((startup, index) => (
            <Card key={index} className="overflow-hidden border border-muted hover:border-muted-foreground/20 transition-colors shadow-none">
              <CardContent className="p-5">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden border border-gray-200">
                    <img
                      src={startup.image}
                      alt={`${startup.name} logo`}
                      className="max-h-full max-w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{startup.name}</h3>
                    <div className="flex flex-wrap gap-1 mt-2">
                      <Badge className={getCategoryColor(startup.category)}>
                        {startup.category}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {startup.description}
                </p>
                
                <AppButton size="sm" variant="secondary" asChild className="w-full">
                  <a href={startup.website} target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </a>
                </AppButton>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Startups;
