export function Ticker() {
  const items = [
    "Python", "FastAPI", "React", "Apache Kafka", "Machine Learning",
    "Data Engineering", "FinTech", "Data Science", "Full-Stack", "Backtesting"
  ];

  // Double the array for seamless looping
  const tickerItems = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden border-y border-border py-3 bg-ink relative z-10 ticker-wrap">
      <div className="flex w-max animate-ticker">
        {tickerItems.map((item, index) => (
          <span
            key={index}
            className="font-syne text-[0.95rem] font-bold text-white/70 whitespace-nowrap px-10 tracking-tight"
          >
            {item} <span className="text-orange">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
