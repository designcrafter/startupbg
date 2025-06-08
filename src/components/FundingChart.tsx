
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const yearlyFunding = [
  { year: '2020', amount: 25 },
  { year: '2021', amount: 38 },
  { year: '2022', amount: 52 },
  { year: '2023', amount: 41 },
  { year: '2024', amount: 45 },
];

const stageBreakdown = [
  { name: 'Pre-seed', value: 35, color: '#8884d8' },
  { name: 'Seed', value: 30, color: '#82ca9d' },
  { name: 'Series A', value: 25, color: '#ffc658' },
  { name: 'Growth', value: 10, color: '#ff7300' },
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
        <CardTitle className="font-roboto-slab">Funding Overview</CardTitle>
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
              <Bar dataKey="amount" fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-4">Stage Breakdown</h4>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={stageBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  dataKey="value"
                >
                  {stageBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Share']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Major Funds</h4>
            <div className="space-y-2">
              {majorFunds.map((fund, index) => (
                <div key={index} className="flex items-center justify-between py-2 px-3 bg-muted rounded-md">
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
