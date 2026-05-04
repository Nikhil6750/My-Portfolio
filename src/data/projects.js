export const projectsData = [
  {
    id: "01",
    badge: "Featured ✦ Backtesting System",
    title: ["Algo", "TradeX"],
    problem: "Manual backtesting of trading strategies is slow and prone to human error and look-ahead bias.",
    impact: "Built an automated engine that processes historical OHLC data 40x faster than manual testing, providing immediate statistical feedback on strategy viability.",
    description: "An intelligent strategy backtesting system that analyzes historical OHLC market data, generates buy/sell signals, calculates win rate, PnL & drawdown, and visualizes trades using interactive candlestick charts. Sentiment analysis included — ML-based trade scoring in progress.",
    techStack: ["Python", "FastAPI", "Pandas", "NumPy", "React", "Tailwind CSS", "Plotly"],
    keyFeatures: [
      "Vectorized Pandas operations for fast row-by-row simulation.",
      "Strict look-ahead bias prevention.",
      "Interactive candlestick visualizations.",
      "Slippage and commission handling."
    ],
    architecture: "React Frontend -> FastAPI REST API -> Python Backtest Engine (Pandas/NumPy) -> SQLite Data Store",
    links: {
      github: "https://github.com/Nikhil6750/Nikhil6750",
      liveDemo: null,
      caseStudy: null,
    }
  },
  {
    id: "02",
    badge: "Full-Stack ✦ Data Pipeline",
    title: ["Data", "Flow"],
    problem: "Financial tick data is highly volatile and requires low-latency ingestion for real-time dashboards.",
    impact: "Designed an event-driven architecture that handles 500+ messages per second with sub-50ms latency.",
    description: "A real-time data streaming pipeline using Apache Kafka to process, transform, and load financial data into a time-series database. Includes a React dashboard for monitoring system health and data throughput in real time.",
    techStack: ["Python", "Kafka", "React", "Node.js", "PostgreSQL"],
    keyFeatures: [
      "Real-time pub/sub architecture using Apache Kafka.",
      "Live WebSocket connections to React dashboard.",
      "Automated data transformation and cleaning.",
    ],
    architecture: "External API -> Kafka Producers -> Kafka Brokers -> Node.js Consumers -> PostgreSQL / React UI",
    links: {
      github: "https://github.com/Nikhil6750/Nikhil6750",
      liveDemo: null,
      caseStudy: null,
    }
  }
];
