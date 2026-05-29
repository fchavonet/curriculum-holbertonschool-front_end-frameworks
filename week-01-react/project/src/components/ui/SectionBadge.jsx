function SectionBadge({ children }) {
  return (
    <p className="px-4 py-2 flex flex-row justify-center items-center gap-2 text-xs text-violet-300 rounded-full border border-violet-500/20 bg-violet-500/10">
      <span className="block text-[8px]">✦</span>
      {children}
      <span className="block text-[8px]">✦</span>
    </p>
  );
}

export default SectionBadge;