export default function StatCard({ title, value }) {
  return (
    <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4">
      <p className="text-sm text-white/60">{title}</p>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
}
