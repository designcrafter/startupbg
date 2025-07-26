import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AppButton } from "@/components/ui/app-button";
import { Landmark } from "lucide-react";

const policies = [
  {
    title: "Startup Visa Program",
    year: "2022",
    description: "Fast-track visas for international entrepreneurs",
    status: "Active",
    link: "https://www.mig.government.bg/upcoming-events/the-ministry-of-innovation-and-growth-will-issue-startup-visa-for-high-tech-and-innovative-projects/?lang=en"
  },
  {
    title: "VCC Structure",
    year: "2023",
    description: "Venture Capital Company legal framework",
    status: "Active",
    link: "https://amcham.bg/2024/05/13/investing-in-a-variable-capital-company-in-bulgaria/"
  },
  {
    title: "R&D Tax Incentives",
    year: "2020",
    description: "Up to 30% tax deduction for research",
    status: "Active",
    link: "https://www.mi.government.bg/en/general/deklarirane-i-izplashtane-na-korporativen-danak-godishna-dan/"
  },
  {
    title: "Digital Nomad Visa",
    year: "2021",
    description: "Remote work program for tech professionals",
    status: "Active",
    link: "https://rapidesim.com/blogs/news/everything-you-need-to-know-about-bulgarias-digital-nomad-visa-in-2025"
  },
  {
    title: "EU Tech Grants",
    year: "2023",
    description: "€250M through 2027 for innovation",
    status: "Active",
    link: "https://national-policies.eacea.ec.europa.eu/youthwiki/chapters/bulgaria/39-start-up-funding-for-young-entrepreneurs"
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
      <CardHeader className="flex flex-row items-center space-x-2">
        <Landmark className="h-5 w-5 text-primary" />
        <CardTitle className="font-roboto-slab uppercase">Government & Policy</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {policies.map((policy, index) => (
            <div key={index} className="flex items-start justify-between p-4 rounded-lg border border-muted hover:border-muted-foreground/20 transition-colors bg-transparent">
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
              <AppButton variant="secondary" size="sm" className="ml-4" asChild>
                <a href={policy.link} target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </AppButton>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PolicyCard;
