import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { BarChart3, AlertTriangle, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const strengthData = [
  { day: "D1", strength: 8 },
  { day: "D3", strength: 18 },
  { day: "D7", strength: 28 },
  { day: "D14", strength: 35 },
  { day: "D28", strength: 42 },
];

const costTimeData = [
  { time: 12, cost: 9200 },
  { time: 16, cost: 8800 },
  { time: 18, cost: 8100 },
  { time: 24, cost: 7600 },
  { time: 32, cost: 7200 },
];

const InsightsPanel = () => {
  return (
    <div className="kpi-card h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-primary" />
          <h2 className="panel-title">AI Insights</h2>
        </div>
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-3.5 w-3.5 text-warning" />
          <Badge variant="outline" className="text-xs border-warning/30 text-warning font-medium">
            Delay Risk: Low
          </Badge>
        </div>
      </div>

      <div className="flex-1 grid grid-rows-2 gap-4 min-h-0">
        {/* Strength Gain Curve */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1.5">
            <TrendingUp className="h-3 w-3" /> Strength Gain Curve (MPa)
          </p>
          <ResponsiveContainer width="100%" height="85%">
            <AreaChart data={strengthData} margin={{ top: 5, right: 5, left: -15, bottom: 0 }}>
              <defs>
                <linearGradient id="strengthGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(214 84% 46%)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(214 84% 46%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 20% 90%)" />
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: "hsl(215 14% 50%)" }} />
              <YAxis tick={{ fontSize: 11, fill: "hsl(215 14% 50%)" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(0 0% 100%)",
                  border: "1px solid hsl(214 20% 90%)",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Area type="monotone" dataKey="strength" stroke="hsl(214 84% 46%)" fill="url(#strengthGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Cost vs Time Trade-off */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2">📉 Cost vs Time Trade-off</p>
          <ResponsiveContainer width="100%" height="85%">
            <LineChart data={costTimeData} margin={{ top: 5, right: 5, left: -15, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 20% 90%)" />
              <XAxis dataKey="time" tick={{ fontSize: 11, fill: "hsl(215 14% 50%)" }} label={{ value: "hrs", position: "insideBottomRight", offset: -5, fontSize: 10, fill: "hsl(215 14% 50%)" }} />
              <YAxis tick={{ fontSize: 11, fill: "hsl(215 14% 50%)" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(0 0% 100%)",
                  border: "1px solid hsl(214 20% 90%)",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
                formatter={(value: number) => [`₹${value.toLocaleString()}`, "Cost"]}
              />
              <Line type="monotone" dataKey="cost" stroke="hsl(216 18% 34%)" strokeWidth={2} dot={{ fill: "hsl(216 18% 34%)", r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default InsightsPanel;
