
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
    title: "VC Raised",
    value: "€264M",
    subtitle: "Total funding",
    trend: "2023 data"
  },
  {
    title: "Unicorns",
    value: "2",
    subtitle: "Payhawk, Shelly Group",
    trend: "All-time"
  },
  {
    title: "Active VCs",
    value: "10+",
    subtitle: "Local VC funds",
    trend: "Operating"
  },
  {
    title: "Tech Workers",
    value: "105K+",
    subtitle: "IT professionals",
    trend: "+15% YoY"
  },
  {
    title: "STEM Graduates",
    value: "42K",
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
            <CardTitle className="font-inter text-sm flex items-center gap-2 uppercase">
              <BarChart className="h-4 w-4" />
              {stat.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.subtitle}</div>
              <div className="text-xs text-green-600 font-medium">{stat.trend}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsGrid;
