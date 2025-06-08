
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
  "LAUNCHub Ventures",
  "Eleven Ventures",
  "Vitosha Venture Partners",
  "BrightCap Ventures",
  "Sopharma Ventures"
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
              <Tooltip formatter={(value) => [`€${value}M`, 'Funding']} />
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
                  <Tooltip formatter={(value) => [`${value}%`, 'Share']} />
                  <Legend wrapperStyle={{ paddingTop: '20px' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Major Funds</h4>
            <div className="space-y-3">
              {majorFunds.map((fund, index) => (
                <div key={index} className="flex items-center gap-3 py-2 px-3 bg-muted rounded-md">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
                  </div>
                  <span className="text-sm">{fund}</span>
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
