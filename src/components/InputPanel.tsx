import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Settings2, Droplets, MapPin, Target } from "lucide-react";

interface InputPanelProps {
  onRun: (params: Record<string, any>) => void;
}

const InputPanel = ({ onRun }: InputPanelProps) => {
  const [cementType, setCementType] = useState("OPC 53");
  const [wcRatio, setWcRatio] = useState([0.42]);
  const [admixture, setAdmixture] = useState("1.2");
  const [curingMethod, setCuringMethod] = useState("Steam");
  const [automationLevel, setAutomationLevel] = useState("Medium");
  const [location, setLocation] = useState("Chennai");
  const [temperature, setTemperature] = useState("34");
  const [humidity, setHumidity] = useState("78");
  const [strength, setStrength] = useState("40");
  const [productionRate, setProductionRate] = useState("500");

  const handleRun = () => {
    onRun({
      cementType, wcRatio: wcRatio[0], admixture: parseFloat(admixture),
      curingMethod, automationLevel, location, temperature: parseFloat(temperature),
      humidity: parseFloat(humidity), strength: parseFloat(strength),
      productionRate: parseFloat(productionRate),
    });
  };

  const locationTemps: Record<string, { temp: string; hum: string }> = {
    Chennai: { temp: "34", hum: "78" },
    Delhi: { temp: "38", hum: "45" },
    Mumbai: { temp: "32", hum: "82" },
    Bangalore: { temp: "28", hum: "65" },
    Kolkata: { temp: "35", hum: "75" },
    Hyderabad: { temp: "36", hum: "55" },
  };

  const handleLocationChange = (loc: string) => {
    setLocation(loc);
    const data = locationTemps[loc];
    if (data) {
      setTemperature(data.temp);
      setHumidity(data.hum);
    }
  };

  return (
    <div className="kpi-card h-full flex flex-col">
      <div className="flex items-center gap-2 mb-5">
        <Settings2 className="h-5 w-5 text-primary" />
        <h2 className="panel-title">Production Parameter Input</h2>
      </div>

      <div className="flex-1 space-y-5 overflow-y-auto">
        {/* Technical Parameters */}
        <div>
          <p className="section-label flex items-center gap-1.5">
            <Droplets className="h-3.5 w-3.5" /> Technical Parameters
          </p>
          <div className="space-y-3">
            <div>
              <Label className="text-xs text-muted-foreground">Cement Type</Label>
              <Select value={cementType} onValueChange={setCementType}>
                <SelectTrigger className="mt-1 h-9"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="OPC 33">OPC 33</SelectItem>
                  <SelectItem value="OPC 43">OPC 43</SelectItem>
                  <SelectItem value="OPC 53">OPC 53</SelectItem>
                  <SelectItem value="PPC">PPC</SelectItem>
                  <SelectItem value="PSC">PSC</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">
                Water-Cement Ratio: <span className="font-semibold text-foreground">{wcRatio[0].toFixed(2)}</span>
              </Label>
              <Slider value={wcRatio} onValueChange={setWcRatio} min={0.3} max={0.6} step={0.01} className="mt-2" />
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">Admixture %</Label>
              <Input type="number" value={admixture} onChange={(e) => setAdmixture(e.target.value)} className="mt-1 h-9" step="0.1" />
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">Curing Method</Label>
              <Select value={curingMethod} onValueChange={setCuringMethod}>
                <SelectTrigger className="mt-1 h-9"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Steam">Steam</SelectItem>
                  <SelectItem value="Natural">Natural</SelectItem>
                  <SelectItem value="Water">Water</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">Automation Level</Label>
              <Select value={automationLevel} onValueChange={setAutomationLevel}>
                <SelectTrigger className="mt-1 h-9"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Low">Low</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Climatic Parameters */}
        <div>
          <p className="section-label flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" /> Climatic Parameters
          </p>
          <div className="space-y-3">
            <div>
              <Label className="text-xs text-muted-foreground">Location</Label>
              <Select value={location} onValueChange={handleLocationChange}>
                <SelectTrigger className="mt-1 h-9"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {Object.keys(locationTemps).map((loc) => (
                    <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-xs text-muted-foreground">Temperature (°C)</Label>
                <Input type="number" value={temperature} onChange={(e) => setTemperature(e.target.value)} className="mt-1 h-9" />
              </div>
              <div>
                <Label className="text-xs text-muted-foreground">Humidity (%)</Label>
                <Input type="number" value={humidity} onChange={(e) => setHumidity(e.target.value)} className="mt-1 h-9" />
              </div>
            </div>
          </div>
        </div>

        {/* Project Requirements */}
        <div>
          <p className="section-label flex items-center gap-1.5">
            <Target className="h-3.5 w-3.5" /> Project Requirements
          </p>
          <div className="space-y-3">
            <div>
              <Label className="text-xs text-muted-foreground">Required Strength (MPa)</Label>
              <Input type="number" value={strength} onChange={(e) => setStrength(e.target.value)} className="mt-1 h-9" />
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">Target Production Rate (units/day)</Label>
              <Input type="number" value={productionRate} onChange={(e) => setProductionRate(e.target.value)} className="mt-1 h-9" />
            </div>
          </div>
        </div>
      </div>

      <Button onClick={handleRun} className="w-full mt-5 h-10 font-semibold">
        Run Optimization
      </Button>
    </div>
  );
};

export default InputPanel;
