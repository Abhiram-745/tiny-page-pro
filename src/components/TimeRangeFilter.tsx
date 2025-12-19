import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon, Clock } from "lucide-react";
import { format, subHours, subDays, subWeeks, subMonths, startOfDay, endOfDay } from "date-fns";
import { cn } from "@/lib/utils";

interface TimeRangeFilterProps {
  startDate: Date | undefined;
  endDate: Date | undefined;
  onRangeChange: (start: Date | undefined, end: Date | undefined) => void;
}

const presets = [
  { label: "Past Hour", getValue: () => ({ start: subHours(new Date(), 1), end: new Date() }) },
  { label: "Past 24 Hours", getValue: () => ({ start: subHours(new Date(), 24), end: new Date() }) },
  { label: "Past Week", getValue: () => ({ start: subWeeks(new Date(), 1), end: new Date() }) },
  { label: "Past Month", getValue: () => ({ start: subMonths(new Date(), 1), end: new Date() }) },
  { label: "All Time", getValue: () => ({ start: undefined, end: undefined }) },
];

export function TimeRangeFilter({ startDate, endDate, onRangeChange }: TimeRangeFilterProps) {
  const [activePreset, setActivePreset] = useState<string>("All Time");
  const [customStart, setCustomStart] = useState<Date | undefined>(undefined);
  const [customEnd, setCustomEnd] = useState<Date | undefined>(undefined);
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("23:59");

  const handlePresetClick = (preset: typeof presets[0]) => {
    setActivePreset(preset.label);
    const { start, end } = preset.getValue();
    setCustomStart(start);
    setCustomEnd(end);
    onRangeChange(start, end);
  };

  const applyCustomRange = () => {
    if (customStart && customEnd) {
      const [startHours, startMinutes] = startTime.split(":").map(Number);
      const [endHours, endMinutes] = endTime.split(":").map(Number);
      
      const start = new Date(customStart);
      start.setHours(startHours, startMinutes, 0, 0);
      
      const end = new Date(customEnd);
      end.setHours(endHours, endMinutes, 59, 999);
      
      setActivePreset("Custom");
      onRangeChange(start, end);
    }
  };

  const getDisplayText = () => {
    if (!startDate && !endDate) return "All Time";
    if (startDate && endDate) {
      return `${format(startDate, "MMM d, HH:mm")} - ${format(endDate, "MMM d, HH:mm")}`;
    }
    return "Select range";
  };

  return (
    <div className="space-y-4">
      {/* Preset Buttons */}
      <div className="flex flex-wrap gap-2">
        {presets.map((preset) => (
          <Button
            key={preset.label}
            variant={activePreset === preset.label ? "default" : "outline"}
            size="sm"
            onClick={() => handlePresetClick(preset)}
          >
            {preset.label}
          </Button>
        ))}
      </div>

      {/* Custom Date Range */}
      <div className="flex flex-wrap items-end gap-4 p-4 border rounded-lg bg-muted/30">
        <div className="space-y-2">
          <Label className="text-xs text-muted-foreground">From Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-[160px] justify-start text-left font-normal",
                  !customStart && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {customStart ? format(customStart, "MMM d, yyyy") : "Pick date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={customStart}
                onSelect={setCustomStart}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label className="text-xs text-muted-foreground">From Time</Label>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <Input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-[120px]"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-xs text-muted-foreground">To Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-[160px] justify-start text-left font-normal",
                  !customEnd && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {customEnd ? format(customEnd, "MMM d, yyyy") : "Pick date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={customEnd}
                onSelect={setCustomEnd}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label className="text-xs text-muted-foreground">To Time</Label>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <Input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-[120px]"
            />
          </div>
        </div>

        <Button 
          onClick={applyCustomRange}
          disabled={!customStart || !customEnd}
        >
          Apply
        </Button>
      </div>

      {/* Current Selection Display */}
      <div className="text-sm text-muted-foreground">
        Showing: <span className="font-medium text-foreground">{getDisplayText()}</span>
      </div>
    </div>
  );
}
