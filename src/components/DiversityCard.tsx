
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const diversityData = [
  { category: 'Bulgaria', women: 22, eu: 17 },
  { category: 'EU Average', women: 17, eu: 17 },
];

const programs = [
  "Women in Tech Bulgaria",
  "Ladies that UX Sofia",
  "Django Girls Sofia",
  "Women Techmakers",
  "Female Founders Network"
];

const DiversityCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-inter">Diversity in Startups</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold mb-4">Women-Led Startups (%)</h4>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={diversityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value}%`, 'Women-Led']} />
              <Bar dataKey="women" fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Supporting Organizations</h4>
          <div className="space-y-2">
            {programs.map((program, index) => (
              <div key={index} className="flex items-center justify-between py-2 px-3 bg-muted rounded-md">
                <span className="text-sm">{program}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-4 bg-green-50 rounded-md">
          <p className="text-sm text-green-800">
            <strong>Bulgaria leads CEE</strong> in women-led startup percentage, with 22% vs 17% EU average
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DiversityCard;
