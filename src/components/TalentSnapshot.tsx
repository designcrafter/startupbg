
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

const regionalHubs = [
  { 
    name: 'Sofia', 
    description: 'The capital and main tech hub',
    logo: "/hub-logos/sofia.png",
    startups: '500+',
    coworking: '25+',
    events: '150+/year'
  },
  { 
    name: 'Plovdiv', 
    description: 'Growing regional center',
    logo: "/hub-logos/plovdiv.png",
    startups: '120+',
    coworking: '8+',
    events: '40+/year'
  },
  { 
    name: 'Varna', 
    description: 'Coastal tech hub',
    logo: "/hub-logos/varna.png",
    startups: '80+',
    coworking: '6+',
    events: '30+/year'
  },
  { 
    name: 'Burgas', 
    description: 'Emerging tech scene',
    logo: "/hub-logos/burgas.png",
    startups: '45+',
    coworking: '4+',
    events: '20+/year'
  },
];

const talentByCity = [
  { name: 'Sofia', value: 65, color: '#1e40af' },
  { name: 'Plovdiv', value: 15, color: '#3b82f6' },
  { name: 'Varna', value: 12, color: '#60a5fa' },
  { name: 'Burgas', value: 8, color: '#93c5fd' },
];

const universities = [
  {
    name: "Sofia University",
    logo: "/university-logos/sofia-uni.png",
    languages: ["English", "Bulgarian", "German"]
  },
  {
    name: "Technical University of Sofia",
    logo: "/university-logos/tech-uni-sofia.png",
    languages: ["English", "Bulgarian"]
  },
  {
    name: "University of Plovdiv",
    logo: "/university-logos/plovdiv-uni.png",
    languages: ["English", "Bulgarian", "French"]
  },
  {
    name: "Technical University of Varna",
    logo: "/university-logos/tech-uni-varna.png",
    languages: ["English", "Bulgarian"]
  },
  {
    name: "New Bulgarian University",
    logo: "/university-logos/new-bg-uni.png",
    languages: ["English", "Bulgarian", "Spanish"]
  }
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
              <Tooltip 
                formatter={(value) => [`${value}`, 'Professionals']} 
                contentStyle={{ backgroundColor: '#f8f9fa', borderColor: '#e9ecef' }}
                itemStyle={{ color: '#495057' }}
                cursor={{ fill: '#f1f3f5' }}
              />
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
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Share']} 
                    contentStyle={{ backgroundColor: '#f8f9fa', borderColor: '#e9ecef' }}
                    itemStyle={{ color: '#495057' }}
                  />
                  <Legend wrapperStyle={{ paddingTop: '20px' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Top Universities</h4>
            <div className="grid grid-cols-1 gap-2 mt-4">
              {universities.map((university, index) => (
                <div key={index} className="flex flex-col gap-1 py-2 px-3 border border-muted hover:border-muted-foreground/20 transition-colors bg-transparent rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-card rounded-md flex items-center justify-center overflow-hidden relative border border-gray-200">
                      {/* Using image with fallback to initials */}
                      <div className="w-full h-full flex items-center justify-center">
                        <img 
                          src={university.logo} 
                          alt={`${university.name} logo`} 
                          className="max-w-full max-h-full object-cover absolute inset-0 m-auto"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.style.display = 'none';
                            target.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                        <div className="w-8 h-8 bg-blue-50 rounded-md flex items-center justify-center text-xs text-blue-800 font-medium hidden absolute inset-0 m-auto">
                          {university.name.substring(0, 2).toUpperCase()}
                        </div>
                      </div>
                    </div>
                    <span className="text-sm font-medium truncate max-w-[180px]">{university.name}</span>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TalentSnapshot;
