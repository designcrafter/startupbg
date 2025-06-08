
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const policies = [
  {
    title: "Startup Visa Program",
    year: "2018",
    description: "Fast-track visas for international entrepreneurs",
    status: "Active"
  },
  {
    title: "VCC Structure",
    year: "2024",
    description: "Venture Capital Company legal framework",
    status: "New"
  },
  {
    title: "R&D Tax Incentives",
    year: "2020",
    description: "Tax benefits for research and development",
    status: "Active"
  },
  {
    title: "Digital Nomad Visa",
    year: "2021",
    description: "Remote work program for tech professionals",
    status: "Active"
  },
  {
    title: "Innovation Fund",
    year: "2022",
    description: "€50M government-backed startup funding",
    status: "Active"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "New": return "bg-green-100 text-green-800";
    case "Active": return "bg-blue-100 text-blue-800";
    case "Proposed": return "bg-yellow-100 text-yellow-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

const PolicyCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-roboto-slab">Government & Policy</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {policies.map((policy, index) => (
            <div key={index} className="flex items-start justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <div className="space-y-1 flex-1">
                <div className="flex items-center space-x-2">
                  <h4 className="font-semibold">{policy.title}</h4>
                  <Badge className={getStatusColor(policy.status)}>
                    {policy.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{policy.description}</p>
                <p className="text-xs text-muted-foreground">Introduced: {policy.year}</p>
              </div>
              <Button variant="ghost" size="sm" className="rounded-full ml-4">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PolicyCard;
