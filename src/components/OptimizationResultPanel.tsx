import { Trophy, Clock, IndianRupee, Zap, FlaskConical, Droplets } from "lucide-react";

interface OptimizationResultPanelProps {
  optimizationMode: string;
}

const results: Record<string, { curing: string; ratio: string; cycle: string; cost: string; improvement: string }> = {
  speed: { curing: "Steam", ratio: "0.40", cycle: "16", cost: "₹8,800", improvement: "20%" },
  cost: { curing: "Natural", ratio: "0.45", cycle: "30", cost: "₹6,900", improvement: "12%" },
  balanced: { curing: "Steam", ratio: "0.42", cycle: "18", cost: "₹8,100", improvement: "15%" },
};

const OptimizationResultPanel = ({ optimizationMode }: OptimizationResultPanelProps) => {
  const data = results[optimizationMode];

  const kpis = [
    { icon: Droplets, label: "Optimal Curing", value: data.curing },
    { icon: FlaskConical, label: "Mix Ratio", value: data.ratio },
    { icon: Clock, label: "Cycle Time", value: `${data.cycle} hrs` },
    { icon: IndianRupee, label: "Est. Cost", value: data.cost },
    { icon: Zap, label: "Efficiency Gain", value: data.improvement, highlight: true },
  ];

  return (
    <div className="kpi-card h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="h-5 w-5 text-primary" />
        <h2 className="panel-title">Recommended Strategy</h2>
      </div>

      <div className="grid grid-cols-2 gap-3 flex-1">
        {kpis.map((kpi, i) => (
          <div
            key={i}
            className={`rounded-lg p-4 flex flex-col justify-center ${
              kpi.highlight
                ? "bg-success/10 border border-success/20 col-span-2"
                : "bg-muted/50 border border-border/50"
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <kpi.icon className={`h-4 w-4 ${kpi.highlight ? "text-success" : "text-primary"}`} />
              <span className="text-xs font-medium text-muted-foreground">{kpi.label}</span>
            </div>
            <span className={`text-2xl font-bold ${kpi.highlight ? "text-success" : "text-foreground"}`}>
              {kpi.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptimizationResultPanel;
