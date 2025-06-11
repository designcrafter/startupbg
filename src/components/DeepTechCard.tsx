
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AppButton } from "@/components/ui/app-button";
import { Badge } from "@/components/ui/badge";
import { Brain } from "lucide-react";

const deepTechProjects = [
  {
    name: "INSAIT",
    description: "ETH Zurich Institute for Computer Science and AI",
    funding: "€30M initial",
    status: "Active",
    year: "2021"
  },
  {
    name: "BRAIN++ AI Factory",
    description: "€1B investment in AI research and development",
    funding: "€1B",
    status: "Announced",
    year: "2023"
  },
  {
    name: "Sofia Tech Park",
    description: "Innovation hub for tech companies and startups",
    funding: "€160M",
    status: "Active",
    year: "2019"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active": return "bg-green-100 text-green-800";
    case "Announced": return "bg-blue-100 text-blue-800";
    case "In Development": return "bg-yellow-100 text-yellow-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

const DeepTechCard = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-x-2">
        <Brain className="h-5 w-5 text-primary" />
        <CardTitle className="font-roboto-slab">Deep Tech & AI</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {deepTechProjects.map((project, index) => (
            <div key={index} className="p-4 rounded-lg border border-muted hover:border-muted-foreground/20 transition-colors bg-transparent">
              <div className="flex items-start justify-between mb-2">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold">{project.name}</h4>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span>Funding: {project.funding}</span>
                    <span>Year: {project.year}</span>
                  </div>
                </div>
                <AppButton variant="ghost" size="sm" className="ml-4">
                  Learn More
                </AppButton>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-md">
          <h4 className="font-semibold text-blue-900 mb-2">AI Research Focus</h4>
          <p className="text-sm text-blue-800">
            Bulgaria is positioning itself as a leader in AI research in Southeast Europe, 
            with major investments in education, research infrastructure, and talent development.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeepTechCard;
