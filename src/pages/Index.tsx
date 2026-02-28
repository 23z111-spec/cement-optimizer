import { useState } from "react";
import InputPanel from "@/components/InputPanel";
import ScenarioPanel from "@/components/ScenarioPanel";
import OptimizationResultPanel from "@/components/OptimizationResultPanel";
import InsightsPanel from "@/components/InsightsPanel";
import OptimizationToggle from "@/components/OptimizationToggle";
import { Factory } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [optimizationMode, setOptimizationMode] = useState("balanced");

  const handleRun = (params: Record<string, any>) => {
    toast.success("Optimization complete", {
      description: `Strategy optimized for ${optimizationMode} mode with W/C ratio ${params.wcRatio}`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <Factory className="h-4 w-4 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-foreground tracking-tight">
              Concrete Production Optimizer
            </h1>
            <p className="text-xs text-muted-foreground">Multi-objective optimization engine</p>
          </div>
        </div>
        <OptimizationToggle value={optimizationMode} onChange={setOptimizationMode} />
      </header>

      {/* Dashboard Grid */}
      <main className="p-4 grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-4 h-[calc(100vh-57px)]">
        {/* Left: Input */}
        <div className="overflow-y-auto">
          <InputPanel onRun={handleRun} />
        </div>

        {/* Right: 3 panels in grid */}
        <div className="grid grid-rows-2 gap-4 min-h-0">
          {/* Top: Scenario Comparison */}
          <ScenarioPanel optimizationMode={optimizationMode} />
          {/* Bottom: Results + Insights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-0">
            <OptimizationResultPanel optimizationMode={optimizationMode} />
            <InsightsPanel />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
