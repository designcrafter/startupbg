
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { TrendingUp } from 'lucide-react';

const yearlyFunding = [
  { year: '2020', amount: 25 },
  { year: '2021', amount: 38 },
  { year: '2022', amount: 52 },
  { year: '2023', amount: 41 },
  { year: '2024', amount: 45 },
];

const stageBreakdown = [
  { name: 'Pre-seed', value: 35, color: '#1e40af' },
  { name: 'Seed', value: 30, color: '#3b82f6' },
  { name: 'Series A', value: 25, color: '#60a5fa' },
  { name: 'Growth', value: 10, color: '#93c5fd' },
];

const majorFunds = [
  {
    name: "LAUNCHub Ventures",
    logo: "/fund-logos/LAUNCHub.png",
    languages: ["English", "Bulgarian", "Romanian", "Greek"]
  },
  {
    name: "Eleven Ventures",
    logo: "/fund-logos/11.png",
    languages: ["English", "Bulgarian", "Romanian", "Serbian"]
  },
  {
    name: "Vitosha Venture Partners",
    logo: "/fund-logos/Vitosha.png",
    languages: ["English", "Bulgarian"]
  },
  {
    name: "BrightCap Ventures",
    logo: "/fund-logos/Brightcap.png",
    languages: ["English", "Bulgarian"]
  },
  {
    name: "Sopharma Ventures",
    logo: "/fund-logos/sopharma.png",
    languages: ["English", "Bulgarian"]
  }
];

const FundingChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-inter flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Funding Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold mb-4">VC Raised by Year (€M)</h4>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={yearlyFunding}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip 
                formatter={(value) => [`€${value}M`, 'Funding']} 
                contentStyle={{ backgroundColor: '#f8f9fa', borderColor: '#e9ecef' }}
                itemStyle={{ color: '#495057' }}
                cursor={{ fill: '#f1f3f5' }}
              />
              <Bar dataKey="amount" fill="#1e40af" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-4">Stage Breakdown</h4>
            <div style={{ width: '100%', height: 250 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={stageBreakdown}
                    cx="50%"
                    cy="45%"
                    innerRadius={40}
                    outerRadius={70}
                    dataKey="value"
                  >
                    {stageBreakdown.map((entry, index) => (
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
            <h4 className="font-semibold mb-4">Major Funds</h4>
            <div className="grid grid-cols-1 gap-2 mt-4">
              {majorFunds.map((fund, index) => (
                <div key={index} className="flex flex-col gap-1 py-2 px-3 border border-muted hover:border-muted-foreground/20 transition-colors bg-transparent rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-card rounded-md flex items-center justify-center overflow-hidden relative border border-gray-200">
                      {/* Using image with fallback to initials */}
                      <div className="w-full h-full flex items-center justify-center">
                        <img 
                          src={fund.logo} 
                          alt={`${fund.name} logo`} 
                          className="max-w-full max-h-full object-cover absolute inset-0 m-auto"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.style.display = 'none';
                            target.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                        <div className="w-8 h-8 bg-blue-50 rounded-md flex items-center justify-center text-xs text-blue-800 font-medium hidden absolute inset-0 m-auto">
                          {fund.name.substring(0, 2).toUpperCase()}
                        </div>
                      </div>
                    </div>
                    <span className="text-sm font-medium truncate max-w-[180px]">{fund.name}</span>
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

export default FundingChart;
