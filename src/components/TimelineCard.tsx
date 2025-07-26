
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const timelineEvents = [
  {
    year: "2002",
    event: "Telerik Founded",
    description: "Major software company establishment",
    type: "milestone"
  },
  {
    year: "2014",
    event: "Telerik Exit",
    description: "$262M acquisition by Progress",
    type: "exit"
  },
  {
    year: "2015",
    event: "Sofia Tech Park",
    description: "57,000 m² innovation hub opens",
    type: "milestone"
  },
  {
    year: "2021",
    event: "INSAIT Launch",
    description: "ETH Zurich AI institute opens",
    type: "milestone"
  },
  {
    year: "2022",
    event: "Startup Visa Program",
    description: "Government initiative launched",
    type: "policy"
  },
  {
    year: "2023",
    event: "€90M AI Investment",
    description: "BRAIN++ AI Factory announced",
    type: "investment"
  },
  {
    year: "2023",
    event: "VCC Structure",
    description: "Venture capital company law",
    type: "policy"
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "milestone": return "bg-blue-100 text-blue-800";
    case "exit": return "bg-green-100 text-green-800";
    case "policy": return "bg-purple-100 text-purple-800";
    case "investment": return "bg-orange-100 text-orange-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

const TimelineCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-roboto-slab uppercase">Ecosystem Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex overflow-x-auto pb-4 space-x-6">
          {timelineEvents.map((event, index) => (
            <div key={index} className="flex-shrink-0 w-64">
              <div className="border border-muted hover:border-muted-foreground/20 transition-colors bg-transparent rounded-lg p-4 h-full">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-primary">{event.year}</span>
                  <Badge className={getTypeColor(event.type)}>{event.type}</Badge>
                </div>
                <h4 className="font-semibold mb-1">{event.event}</h4>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TimelineCard;
