import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Data representing the reflux (pros and cons) of doing startups in Bulgaria
const refluxData = {
  advantages: [
    {
      title: "Cost Efficiency",
      description: "Lower operational costs and competitive developer salaries",
      icon: "💰"
    },
    {
      title: "EU Market Access",
      description: "Direct access to the European single market",
      icon: "🇪🇺"
    },
    {
      title: "Technical Talent",
      description: "Strong technical education and growing talent pool",
      icon: "👨‍💻"
    },
    {
      title: "Growing Ecosystem",
      description: "Expanding network of incubators, accelerators and VCs",
      icon: "🌱"
    }
  ],
  challenges: [
    {
      title: "Limited Local Market",
      description: "Small domestic market requiring early internationalization",
      icon: "🔍"
    },
    {
      title: "Access to Capital",
      description: "Fewer funding options compared to major startup hubs",
      icon: "💸"
    },
    {
      title: "Bureaucracy",
      description: "Administrative hurdles and regulatory complexity",
      icon: "📝"
    },
    {
      title: "Talent Retention",
      description: "Competition with Western markets for keeping top talent",
      icon: "🧲"
    }
  ]
};

const StartupRefluxCard = () => {
  return (
    <Card className="col-span-full">
      <CardHeader className="flex flex-row items-center space-x-2">
        <ArrowUpDown className="h-5 w-5 text-primary" />
        <CardTitle className="font-roboto-slab">Startup Reflux: Pros & Cons</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Advantages Column */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold flex items-center">
              <Badge className="bg-green-100 text-green-800 mr-2">Advantages</Badge>
              Why Bulgaria is Great for Startups
            </h3>
            <div className="grid gap-4">
              {refluxData.advantages.map((item, index) => (
                <div key={index} className="p-4 rounded-lg bg-green-50/50 hover:bg-green-50 transition-colors">
                  <div className="flex items-start space-x-3">
                    <div className="text-xl">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Challenges Column */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold flex items-center">
              <Badge className="bg-amber-100 text-amber-800 mr-2">Challenges</Badge>
              Obstacles to Navigate
            </h3>
            <div className="grid gap-4">
              {refluxData.challenges.map((item, index) => (
                <div key={index} className="p-4 rounded-lg bg-amber-50/50 hover:bg-amber-50 transition-colors">
                  <div className="flex items-start space-x-3">
                    <div className="text-xl">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 rounded-lg bg-blue-50/50 border border-blue-100">
          <p className="text-sm text-center">
            Despite the challenges, Bulgaria's startup ecosystem continues to grow, with increasing international recognition and success stories demonstrating the potential for building global companies from Sofia and other regional hubs.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StartupRefluxCard;
