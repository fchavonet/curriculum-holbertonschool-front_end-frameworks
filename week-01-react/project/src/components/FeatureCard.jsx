function FeatureCard({ icon: Icon, title, description }) {
  return (
    <article className="p-8 flex flex-col justify-start items-start gap-4 text-start rounded-3xl border border-slate-800 bg-slate-950 shadow-xl shadow-slate-950/40">
      <div className="w-8 h-8 flex flex-row justify-center items-center rounded-lg bg-violet-500 shadow-lg shadow-violet-500/40">
        <Icon className="w-5 h-5" />
      </div>

      <h3 className="text-sm font-bold">{title}</h3>

      <p className="-mt-3 text-sm text-slate-500">{description}</p>
    </article>
  );
}

export default FeatureCard;