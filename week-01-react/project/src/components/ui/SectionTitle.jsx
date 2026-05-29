function SectionTitle({ children, highlight, size = "default" }) {
    let className = "max-w-4xl font-black tracking-tight leading-none";

    if (size === "default") {
        className += " text-4xl md:text-5xl";
    }

    if (size === "large") {
        className += " text-5xl md:text-7xl";
    }

    return (
        <h2 className={className}>
            {children}

            <span className="block text-violet-300">
                {highlight}
            </span>
        </h2>
    );
}

export default SectionTitle;