function StatCard({ value, label }) {
  return (
    <div className="p-6 rounded-xl border border-slate-800 bg-slate-950 shadow-xl shadow-slate-950/40">
      <strong className="block text-4xl font-black text-violet-300">{value}</strong>
      <span className="block mt-1 text-xs text-slate-500">{label}</span>
    </div>
  );
}

export default StatCard;