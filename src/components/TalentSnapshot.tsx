
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { Users } from 'lucide-react';

const talentByType = [
  { type: 'Frontend Dev', count: 12000 },
  { type: 'Backend Dev', count: 15000 },
  { type: 'DevOps', count: 3500 },
  { type: 'QA', count: 5500 },
  { type: 'AI/ML', count: 2000 },
  { type: 'Data Science', count: 1800 },
];

const talentByCity = [
  { name: 'Sofia', value: 65, color: '#1e40af' },
  { name: 'Plovdiv', value: 15, color: '#3b82f6' },
  { name: 'Varna', value: 12, color: '#60a5fa' },
  { name: 'Burgas', value: 8, color: '#93c5fd' },
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
        <CardTitle className="font-inter flex items-center gap-2">
          <Users className="h-5 w-5" />
          Tech Talent Snapshot
        </CardTitle>
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
              <Bar dataKey="count" fill="#1e40af" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-4">Distribution by City (%)</h4>
            <div style={{ width: '100%', height: 250 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={talentByCity}
                    cx="50%"
                    cy="45%"
                    innerRadius={40}
                    outerRadius={70}
                    dataKey="value"
                  >
                    {talentByCity.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Share']} />
                  <Legend wrapperStyle={{ paddingTop: '20px' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Top Universities</h4>
            <div className="space-y-3">
              {universities.map((university, index) => (
                <div key={index} className="flex items-center gap-3 py-2 px-3 bg-muted rounded-md">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
                  </div>
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
