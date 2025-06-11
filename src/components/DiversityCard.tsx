
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Heart } from 'lucide-react';

const diversityData = [
  { category: 'Bulgaria', women: 22, eu: 17 },
  { category: 'EU Average', women: 17, eu: 17 },
];

const supportingOrgs = [
  {
    name: "Women in Tech Bulgaria",
    logo: "/supporting-orgs/Women-in-Tech-Bulgaria.png"
  },
  {
    name: "Ladies that UX Sofia",
    logo: "/supporting-orgs/Ladies-that-UX-Sofia.png"
  },
  {
    name: "Django Girls Sofia",
    logo: "/supporting-orgs/Django-Girls-Sofia.png"
  },
  {
    name: "Women Techmakers",
    logo: "/supporting-orgs/Women-Techmakers.png"
  },
  {
    name: "Female Founders Network",
    logo: ""
  }
];

const DiversityCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-inter flex items-center gap-2">
          <Heart className="h-5 w-5" />
          Diversity in Startups
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold mb-4">Women-Led Startups (%)</h4>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={diversityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Women-Led']} 
                contentStyle={{ backgroundColor: '#f8f9fa', borderColor: '#e9ecef' }}
                itemStyle={{ color: '#495057' }}
                cursor={{ fill: '#f1f3f5' }}
              />
              <Bar dataKey="women" fill="#1e40af" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Supporting Organizations</h4>
          <div className="grid grid-cols-1 gap-2 mt-4">
            {supportingOrgs.map((org, index) => (
              <div key={index} className="flex flex-col gap-1 py-2 px-3 border border-muted hover:border-muted-foreground/20 transition-colors bg-transparent rounded-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-card rounded-md flex items-center justify-center overflow-hidden relative border border-gray-200">
                    {/* Using image with fallback to initials */}
                    <div className="w-full h-full flex items-center justify-center">
                      <img 
                        src={org.logo} 
                        alt={`${org.name} logo`} 
                        className="max-w-full max-h-full object-cover absolute inset-0 m-auto"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="w-8 h-8 bg-blue-50 rounded-md flex items-center justify-center text-xs text-blue-800 font-medium hidden absolute inset-0 m-auto">
                        {org.name.substring(0, 2).toUpperCase()}
                      </div>
                    </div>
                  </div>
                  <span className="text-sm font-medium truncate max-w-[180px]">{org.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-4 bg-blue-50 rounded-md">
          <p className="text-sm text-blue-800">
            <strong>Bulgaria leads CEE</strong> in women-led startup percentage, with 22% vs 17% EU average
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DiversityCard;
