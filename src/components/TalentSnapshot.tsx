
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const talentByType = [
  { type: 'Frontend Dev', count: 12000 },
  { type: 'Backend Dev', count: 15000 },
  { type: 'DevOps', count: 3500 },
  { type: 'QA', count: 5500 },
  { type: 'AI/ML', count: 2000 },
  { type: 'Data Science', count: 1800 },
];

const talentByCity = [
  { name: 'Sofia', value: 65, color: '#000000' },
  { name: 'Plovdiv', value: 15, color: '#404040' },
  { name: 'Varna', value: 12, color: '#808080' },
  { name: 'Burgas', value: 8, color: '#C0C0C0' },
];

const universities = [
  "Sofia University",
  "Technical University of Sofia",
  "University of Plovdiv",
  "Technical University of Varna",
  "New Bulgarian University"
];

const TalentSnapshot = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-inter">Tech Talent Snapshot</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold mb-4">Talent by Specialization</h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={talentByType} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="type" 
                angle={-45} 
                textAnchor="end" 
                height={80}
                fontSize={12}
              />
              <YAxis />
              <Tooltip formatter={(value) => [`${value}`, 'Professionals']} />
              <Bar dataKey="count" fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-4">Distribution by City (%)</h4>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={talentByCity}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  dataKey="value"
                >
                  {talentByCity.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Share']} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Top Universities</h4>
            <div className="space-y-2">
              {universities.map((university, index) => (
                <div key={index} className="flex items-center justify-between py-2 px-3 bg-muted rounded-md">
                  <span className="text-sm">{university}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-blue-50 rounded-md">
              <p className="text-sm text-blue-800">
                <strong>3,200</strong> STEM graduates annually
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TalentSnapshot;
