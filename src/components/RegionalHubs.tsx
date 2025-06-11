
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Map } from "lucide-react";

const cities = [
  {
    name: "Sofia",
    startups: "500+",
    coworking: "25+",
    events: "150+/year",
    description: "The capital and main tech hub",
    logo: "/hub-logos/sofia.png"
  },
  {
    name: "Plovdiv",
    startups: "120+",
    coworking: "8+",
    events: "40+/year",
    description: "Growing regional center",
    logo: "/hub-logos/plovdiv.png"
  },
  {
    name: "Varna",
    startups: "80+",
    coworking: "6+",
    events: "30+/year",
    description: "Coastal tech hub",
    logo: "/hub-logos/varna.png"
  },
  {
    name: "Burgas",
    startups: "45+",
    coworking: "4+",
    events: "20+/year",
    description: "Emerging tech scene",
    logo: "/hub-logos/burgas.png"
  }
];

const RegionalHubs = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-x-2">
        <Map className="h-5 w-5 text-primary" />
        <CardTitle className="font-roboto-slab">Regional Hubs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4">
          {cities.map((city, index) => (
            <div 
              key={index} 
              className="rounded-lg border border-muted hover:border-muted-foreground/20 transition-colors bg-transparent overflow-hidden flex flex-col md:flex-row"
            >
              {/* Top/Left side - Image */}
              <div className="w-full md:w-2/5 h-40 md:h-auto relative">
                <div className="absolute inset-0 overflow-hidden">
                  {/* Using image with fallback to city name */}
                  <img 
                    src={city.logo} 
                    alt={`${city.name} landmark`} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="w-full h-full bg-blue-50 flex items-center justify-center text-base text-blue-800 font-medium hidden">
                    {city.name}
                  </div>
                </div>
              </div>
              
              {/* Bottom/Right side - Content */}
              <div className="w-full md:w-3/5 p-4">
                <div className="mb-3">
                  <h4 className="font-semibold text-lg">{city.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {city.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="text-center">
                    <div className="font-bold text-primary">
                      {city.startups}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Startups
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary">
                      {city.coworking}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Coworking
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary">
                      {city.events}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Events
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RegionalHubs;
