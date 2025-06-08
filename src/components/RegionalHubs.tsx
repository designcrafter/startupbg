
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const cities = [
  {
    name: "Sofia",
    startups: "500+",
    coworking: "25+",
    events: "150+/year",
    description: "The capital and main tech hub",
    highlight: true
  },
  {
    name: "Plovdiv",
    startups: "120+",
    coworking: "8+",
    events: "40+/year",
    description: "Growing regional center",
    highlight: false
  },
  {
    name: "Varna",
    startups: "80+",
    coworking: "6+",
    events: "30+/year",
    description: "Coastal tech hub",
    highlight: false
  },
  {
    name: "Burgas",
    startups: "45+",
    coworking: "4+",
    events: "20+/year",
    description: "Emerging tech scene",
    highlight: false
  }
];

const RegionalHubs = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-roboto-slab">Regional Hubs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {cities.map((city, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-lg transition-colors ${
                city.highlight 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted/50 hover:bg-muted'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg">{city.name}</h4>
                  <p className={`text-sm ${city.highlight ? 'opacity-90' : 'text-muted-foreground'}`}>
                    {city.description}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="text-center">
                  <div className={`font-bold ${city.highlight ? 'text-primary-foreground' : 'text-primary'}`}>
                    {city.startups}
                  </div>
                  <div className={`text-xs ${city.highlight ? 'opacity-75' : 'text-muted-foreground'}`}>
                    Startups
                  </div>
                </div>
                <div className="text-center">
                  <div className={`font-bold ${city.highlight ? 'text-primary-foreground' : 'text-primary'}`}>
                    {city.coworking}
                  </div>
                  <div className={`text-xs ${city.highlight ? 'opacity-75' : 'text-muted-foreground'}`}>
                    Coworking
                  </div>
                </div>
                <div className="text-center">
                  <div className={`font-bold ${city.highlight ? 'text-primary-foreground' : 'text-primary'}`}>
                    {city.events}
                  </div>
                  <div className={`text-xs ${city.highlight ? 'opacity-75' : 'text-muted-foreground'}`}>
                    Events
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
