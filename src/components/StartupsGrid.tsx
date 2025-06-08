import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const startups = [
  { 
    name: "Paymi", 
    category: "Fintech", 
    description: "Digital payment solutions",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop"
  },
  { 
    name: "Gtmhub", 
    category: "SaaS", 
    description: "OKR management platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop"
  },
  { 
    name: "Chaos Group", 
    category: "3D Graphics", 
    description: "Rendering software",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop"
  },
  { 
    name: "Kelvin Health", 
    category: "HealthTech", 
    description: "AI breast cancer screening",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop"
  },
  { 
    name: "Smarty", 
    category: "AdTech", 
    description: "Advertising optimization",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop"
  },
  { 
    name: "Enhancv", 
    category: "HR Tech", 
    description: "Resume builder platform",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop"
  },
  { 
    name: "Dronamics", 
    category: "Logistics", 
    description: "Cargo drone delivery",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=300&h=200&fit=crop"
  },
  { 
    name: "Imagga", 
    category: "AI", 
    description: "Image recognition API",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop"
  }
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
        <CardTitle className="font-inter">Top Startups</CardTitle>
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
            <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <img 
                src={startup.image} 
                alt={`${startup.name} logo`}
                className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex-1 space-y-1">
                <div className="flex items-center space-x-2">
                  <h4 className="font-semibold">{startup.name}</h4>
                  <Badge className={getCategoryColor(startup.category)}>
                    {startup.category}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{startup.description}</p>
              </div>
              <Button variant="ghost" size="sm" className="rounded-full flex-shrink-0">
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
