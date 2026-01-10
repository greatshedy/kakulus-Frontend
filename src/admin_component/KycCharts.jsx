import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis
} from "recharts";

export default function KycCharts({ users }) {

  console
  const riskData = [ "Zero risk tolerance level",
    "Low risk appetite",
    "Medium Risk tolerance",
    "High risk tolerance level",].map(level => ({
    name: level,
    value: users.filter(u => u.risk === level).length
  }));


  





  const statusData = [
    { name: "Below N5million", value: users.filter(u => u.current_size_of_investments === "Below N5million").length },
    { name: "N5million - N20million", value: users.filter(u => u.current_size_of_investments === "N5million - N20million").length },
    { name: "N20million - N50million", value: users.filter(u => u.current_size_of_investments === "N20million - N50million").length },
    { name: "N50million - N100million", value: users.filter(u => u.current_size_of_investments === "N50million - N100million").length },
    { name: "N100million - N200million", value: users.filter(u => u.current_size_of_investments === "N100million - N200million").length },
    { name: "N200million and above", value: users.filter(u => u.current_size_of_investments === "N200million and above").length }
  ];

  const COLORS = ["#c084fc", "#60a5fa", "#f472b6"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

      {/* Risk Pie */}
      <div className="glass-card h-64">
        <p className="text-sm mb-2 text-white/60">Risk Distribution</p>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={riskData} dataKey="value" innerRadius={50} outerRadius={80}>
              {riskData.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Status Bar */}
      <div className="glass-card h-64">
        <p className="text-sm mb-2 text-white/60">User Status</p>
        <ResponsiveContainer>
          <BarChart data={statusData}
          barSize={`${100/6}%`}
          
          >
            
            <XAxis dataKey="name" stroke="#fff"  />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Bar dataKey="value" fill="#60a5fa" radius={[6,6,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
