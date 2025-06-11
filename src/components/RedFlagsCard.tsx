import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Users, Briefcase, Globe, FileText, Flag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Key challenges and mitigation strategies for Bulgarian startups
const challenges = [
  {
    category: "Talent",
    highlight: "30%",
    issue: "Competitive hiring market and retention challenges",
    strategy: "Invest in training programs and competitive benefits",
    icon: Users
  },
  {
    category: "Funding",
    highlight: "5x",
    issue: "Limited late-stage capital and follow-on investment",
    strategy: "Build international investor relationships early",
    icon: Briefcase
  },
  {
    category: "Market",
    highlight: "7M",
    issue: "Small domestic market requires early global focus",
    strategy: "Plan international expansion from day one",
    icon: Globe
  },
  {
    category: "Regulatory",
    highlight: "43rd",
    issue: "Administrative complexity and compliance burden",
    strategy: "Allocate resources for legal and regulatory support",
    icon: FileText
  }
];

const RedFlagsCard = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-x-2">
        <Flag className="h-5 w-5" />
        <CardTitle className="font-roboto-slab">Red Flags</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-muted-foreground text-sm">
          While Bulgaria offers significant opportunities for startups, entrepreneurs should be aware of these common challenges 
          and consider proven strategies to overcome them.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {challenges.map((item, idx) => (
            <div key={idx} className="border border-muted hover:border-muted-foreground/20 rounded-lg p-3 transition-colors bg-transparent flex flex-col items-center text-center">
              <item.icon className="h-6 w-6 mb-2" />
              <div className="text-3xl font-bold">{item.highlight}</div>
              <Badge className="bg-red-100 text-red-800 my-2">{item.category}</Badge>
              <p className="text-xs text-muted-foreground">{item.issue}</p>
            </div>
          ))}
        </div>

      </CardContent>
    </Card>
  );
};

export default RedFlagsCard;
