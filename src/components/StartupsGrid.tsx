import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AppButton } from "@/components/ui/app-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
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

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    "Fintech": "bg-green-100 text-green-800",
    "SaaS": "bg-blue-100 text-blue-800",
    "AI": "bg-purple-100 text-purple-800",
    "Health": "bg-red-100 text-red-800",
    "HR Tech": "bg-indigo-100 text-indigo-800",
    "Logistics": "bg-yellow-100 text-yellow-800",
    "3D": "bg-pink-100 text-pink-800",
    "IoT": "bg-cyan-100 text-cyan-800",
    "CleanTech": "bg-emerald-100 text-emerald-800",
    "Dev Tools": "bg-violet-100 text-violet-800",
    "Research": "bg-amber-100 text-amber-800",
    "EdTech": "bg-orange-100 text-orange-800",
    "Digital Rights": "bg-rose-100 text-rose-800"
  };
  return colors[category] || "bg-gray-100 text-gray-800";
};

const StartupsGrid = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Show only top 5 startups by funding in the main view
  const topStartups = startups.slice(0, 5);
  
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-row items-center space-x-2">
          <Rocket className="h-5 w-5 text-primary" />
          <CardTitle>Top Startups by Funding</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4">
          {topStartups.map((startup, index) => (
            <Card key={index} className="overflow-hidden border border-muted hover:border-muted-foreground/20 transition-colors shadow-none">
              <div className="p-4 flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden border border-gray-200">
                  <img
                    src={startup.image}
                    alt={`${startup.name} logo`}
                    className="max-h-full max-w-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-base">{startup.name}</h3>
                    <Badge className={getCategoryColor(startup.category)}>
                      {startup.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{startup.description}</p>
                  <div className="pt-1">
                    <AppButton size="sm" variant="secondary" asChild>
                      <a href={startup.website} target="_blank" rel="noopener noreferrer">
                        Visit Website
                      </a>
                    </AppButton>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-6 flex justify-center">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <AppButton variant="ghost" className="w-full">
                See All Startups
              </AppButton>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-lg mb-4">Top Startups by Funding</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {startups.map((startup, index) => (
                  <Card key={index} className="overflow-hidden border border-muted hover:border-muted-foreground/20 transition-colors shadow-none">
                    <div className="p-4">
                      <div className="flex items-start space-x-3 mb-3">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden border border-gray-200">
                          <img
                            src={startup.image}
                            alt={`${startup.name} logo`}
                            className="max-h-full max-w-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-base">{startup.name}</h3>
                            <Badge className={getCategoryColor(startup.category)}>
                              {startup.category}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{startup.description}</p>
                        </div>
                      </div>
                      <div className="mt-auto">
                        <AppButton size="sm" variant="secondary" asChild className="w-full">
                          <a href={startup.website} target="_blank" rel="noopener noreferrer">
                            Visit Website
                          </a>
                        </AppButton>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
};

export default StartupsGrid;
