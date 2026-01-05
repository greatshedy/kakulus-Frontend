import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis
} from "recharts";

export default function KycCharts({ users }) {
  const riskData = ["Low", "Medium", "High"].map(level => ({
    name: level,
    value: users.filter(u => u.risk === level).length
  }));

  const statusData = [
    { name: "Active", value: users.filter(u => u.status === "active").length },
    { name: "Blocked", value: users.filter(u => u.status === "blocked").length }
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
          <BarChart data={statusData}>
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Bar dataKey="value" fill="#60a5fa" radius={[6,6,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
