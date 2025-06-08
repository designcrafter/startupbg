
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart } from 'lucide-react';

const statsData = [
  {
    title: "Active Startups",
    value: "800+",
    subtitle: "Registered companies",
    trend: "+12% YoY"
  },
  {
    title: "VC Raised (2024)",
    value: "€45M",
    subtitle: "Total funding",
    trend: "+8% vs 2023"
  },
  {
    title: "Unicorns",
    value: "2",
    subtitle: "Telerik, Paymi",
    trend: "All-time"
  },
  {
    title: "Active VCs",
    value: "15+",
    subtitle: "Investment funds",
    trend: "Operating"
  },
  {
    title: "Tech Workers",
    value: "45K+",
    subtitle: "IT professionals",
    trend: "+15% YoY"
  },
  {
    title: "STEM Graduates",
    value: "3.2K",
    subtitle: "Annual output",
    trend: "2023 data"
  }
];

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {statsData.map((stat, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader className="pb-2">
            <CardTitle className="font-inter text-lg flex items-center gap-2">
              <BarChart className="h-4 w-4" />
              {stat.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.subtitle}</div>
              <div className="text-xs text-green-600 font-medium">{stat.trend}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsGrid;
