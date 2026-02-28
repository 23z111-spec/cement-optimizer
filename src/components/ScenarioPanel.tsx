import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { CheckCircle2, GitCompareArrows } from "lucide-react";

interface ScenarioPanelProps {
  optimizationMode: string;
}

const scenarios = [
  { name: "Steam", cycleTime: 20, cost: 8500, strengthOk: true },
  { name: "Natural", cycleTime: 32, cost: 7200, strengthOk: true },
  { name: "Optimized", cycleTime: 18, cost: 8100, strengthOk: true },
];

const ScenarioPanel = ({ optimizationMode }: ScenarioPanelProps) => {
  const highlighted = optimizationMode === "speed" ? "Steam" : optimizationMode === "cost" ? "Natural" : "Optimized";

  return (
    <div className="kpi-card h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <GitCompareArrows className="h-5 w-5 text-primary" />
        <h2 className="panel-title">Scenario Comparison</h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 text-xs font-semibold text-muted-foreground">Scenario</th>
              <th className="text-left py-2 text-xs font-semibold text-muted-foreground">Curing</th>
              <th className="text-right py-2 text-xs font-semibold text-muted-foreground">Cycle (hrs)</th>
              <th className="text-right py-2 text-xs font-semibold text-muted-foreground">Cost (₹)</th>
              <th className="text-center py-2 text-xs font-semibold text-muted-foreground">Strength</th>
            </tr>
          </thead>
          <tbody>
            {scenarios.map((s, i) => (
              <tr
                key={i}
                className={`border-b border-border/50 ${s.name === highlighted ? "bg-primary/5" : ""}`}
              >
                <td className="py-2.5 font-medium">{String.fromCharCode(65 + i)}</td>
                <td className="py-2.5 text-muted-foreground">{s.name}</td>
                <td className="py-2.5 text-right font-mono">{s.cycleTime}</td>
                <td className="py-2.5 text-right font-mono">₹{s.cost.toLocaleString()}</td>
                <td className="py-2.5 text-center">
                  <CheckCircle2 className="h-4 w-4 text-success inline-block" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Chart */}
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={scenarios} margin={{ top: 5, right: 5, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 20% 90%)" />
            <XAxis dataKey="name" tick={{ fontSize: 12, fill: "hsl(215 14% 50%)" }} />
            <YAxis yAxisId="left" tick={{ fontSize: 11, fill: "hsl(215 14% 50%)" }} />
            <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11, fill: "hsl(215 14% 50%)" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(0 0% 100%)",
                border: "1px solid hsl(214 20% 90%)",
                borderRadius: "8px",
                fontSize: "12px",
              }}
            />
            <Legend wrapperStyle={{ fontSize: "12px" }} />
            <Bar yAxisId="left" dataKey="cycleTime" fill="hsl(214 84% 46%)" name="Cycle Time (hrs)" radius={[4, 4, 0, 0]} />
            <Bar yAxisId="right" dataKey="cost" fill="hsl(216 18% 34%)" name="Cost (₹)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ScenarioPanel;
