
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const startups = [
  { name: "Paymi", category: "Fintech", description: "Digital payment solutions" },
  { name: "Gtmhub", category: "SaaS", description: "OKR management platform" },
  { name: "Chaos Group", category: "3D Graphics", description: "Rendering software" },
  { name: "Kelvin Health", category: "HealthTech", description: "AI breast cancer screening" },
  { name: "Smarty", category: "AdTech", description: "Advertising optimization" },
  { name: "Enhancv", category: "HR Tech", description: "Resume builder platform" },
  { name: "Dronamics", category: "Logistics", description: "Cargo drone delivery" },
  { name: "Imagga", category: "AI", description: "Image recognition API" }
];

const categories = ["All", "Fintech", "SaaS", "AI", "HealthTech", "AdTech", "HR Tech", "Logistics"];

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    "Fintech": "bg-green-100 text-green-800",
    "SaaS": "bg-blue-100 text-blue-800",
    "AI": "bg-purple-100 text-purple-800",
    "HealthTech": "bg-red-100 text-red-800",
    "AdTech": "bg-orange-100 text-orange-800",
    "HR Tech": "bg-indigo-100 text-indigo-800",
    "Logistics": "bg-yellow-100 text-yellow-800",
    "3D Graphics": "bg-pink-100 text-pink-800"
  };
  return colors[category] || "bg-gray-100 text-gray-800";
};

const StartupsGrid = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-roboto-slab">Top Startups</CardTitle>
        <div className="flex flex-wrap gap-2 pt-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              className="rounded-full h-8 text-xs"
            >
              {category}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {startups.map((startup, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <h4 className="font-semibold">{startup.name}</h4>
                  <Badge className={getCategoryColor(startup.category)}>
                    {startup.category}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{startup.description}</p>
              </div>
              <Button variant="ghost" size="sm" className="rounded-full">
                View Details
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StartupsGrid;
