import { Zap, IndianRupee, Scale } from "lucide-react";

interface OptimizationToggleProps {
  value: string;
  onChange: (value: string) => void;
}

const modes = [
  { id: "speed", label: "Optimize for Speed", icon: Zap },
  { id: "balanced", label: "Balanced", icon: Scale },
  { id: "cost", label: "Optimize for Cost", icon: IndianRupee },
];

const OptimizationToggle = ({ value, onChange }: OptimizationToggleProps) => {
  return (
    <div className="inline-flex items-center rounded-lg border border-border bg-card p-1 gap-1">
      {modes.map((mode) => (
        <button
          key={mode.id}
          onClick={() => onChange(mode.id)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
            value === mode.id
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          }`}
        >
          <mode.icon className="h-3.5 w-3.5" />
          {mode.label}
        </button>
      ))}
    </div>
  );
};

export default OptimizationToggle;
