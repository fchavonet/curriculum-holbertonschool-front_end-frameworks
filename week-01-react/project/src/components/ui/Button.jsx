function Button({ children, href, variant = "primary" }) {
  let className = "px-4 py-2 font-semibold text-violet-50 rounded-md transition";

  if (variant === "primary") {
    className += " bg-violet-500 hover:bg-violet-600 shadow-lg shadow-violet-500/30";
  }

  if (variant === "secondary") {
    className += " border border-slate-800 bg-slate-950 hover:bg-slate-900 shadow-lg shadow-slate-950/40";
  }

  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default Button;