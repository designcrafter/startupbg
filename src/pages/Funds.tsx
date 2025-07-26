import { Badge } from "@/components/ui/badge";
import { AppButton } from "@/components/ui/app-button";
import { Card, CardContent } from "@/components/ui/card";
import { Landmark } from "lucide-react";
import { vcFunds } from "@/data/vcFunds";

// Function to get a random color for fund initials
const getRandomColor = (index: number) => {
  const colors = [
    "bg-purple-50 text-purple-800",
    "bg-green-50 text-green-800",
    "bg-amber-50 text-amber-800",
    "bg-rose-50 text-rose-800",
    "bg-cyan-50 text-cyan-800",
    "bg-indigo-50 text-indigo-800",
    "bg-emerald-50 text-emerald-800",
    "bg-pink-50 text-pink-800",
  ];
  return colors[index % colors.length];
};

const Funds = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Venture Capital Funds</h1>
          <p className="text-muted-foreground mt-1">Active VC funds supporting the Bulgarian startup ecosystem</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vcFunds.map((fund, index) => (
            <Card key={index} className="overflow-hidden border border-muted hover:border-muted-foreground/20 transition-colors shadow-none">
              <CardContent className="p-5">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden relative border border-gray-200 bg-white">
                    {fund.logo ? (
                      <img
                        src={fund.logo}
                        alt={`${fund.name} logo`}
                        className="max-h-full max-w-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                    ) : null}
                    <div className={`w-full h-full ${getRandomColor(index)} rounded-lg flex items-center justify-center text-lg font-medium ${fund.logo ? 'hidden' : ''}`}>
                      {fund.name.substring(0, 2).toUpperCase()}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{fund.name}</h3>
                    {fund.size && (
                      <div className="text-sm text-muted-foreground mb-1">
                        Fund size: <span className="font-medium">{fund.size}</span>
                      </div>
                    )}
                    {fund.focus && fund.focus.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {fund.focus.map((tag, i) => (
                          <Badge key={i} variant="outline" className="bg-blue-50 text-blue-800 border-blue-200">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {fund.description}
                </p>
                
                {fund.languages && fund.languages.length > 0 && (
                  <div className="text-xs text-muted-foreground mb-3">
                    Languages: {fund.languages.join(", ")}
                  </div>
                )}
                
                <AppButton size="sm" variant="secondary" asChild className="w-full">
                  <a href={fund.website} target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </a>
                </AppButton>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Funds;
