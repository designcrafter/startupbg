import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Percent, Users, PiggyBank, Clock } from "lucide-react";

// Key advantages of building startups in Bulgaria
const advantages = [
  {
    category: "Tax",
    highlight: "10%",
    description: "Corporate tax rate (lowest in EU)",
    icon: Percent
  },
  {
    category: "Talent",
    highlight: "105k+",
    description: "IT professionals with 50-70% lower costs",
    icon: Users
  },
  {
    category: "Runway",
    highlight: "2x",
    description: "Longer runway with same capital vs Western Europe",
    icon: Clock
  },
  {
    category: "Scaling",
    highlight: "3-5x",
    description: "Faster engineering team growth",
    icon: TrendingUp
  }
];

const AdvantagesCard = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-x-2">
        <TrendingUp className="h-5 w-5" />
        <CardTitle className="font-roboto-slab">Advantages</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-muted-foreground text-sm">
          Bulgaria offers unique advantages for startups, combining EU membership benefits with cost efficiency and technical talent.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {advantages.map((item, idx) => (
            <div key={idx} className="border border-muted hover:border-muted-foreground/20 rounded-lg p-3 transition-colors bg-transparent flex flex-col items-center text-center">
              <item.icon className="h-6 w-6 mb-2" />
              <div className="text-3xl font-bold">{item.highlight}</div>
              <Badge className="bg-emerald-100 text-emerald-800 my-2">{item.category}</Badge>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

      </CardContent>
    </Card>
  );
};

export default AdvantagesCard;
