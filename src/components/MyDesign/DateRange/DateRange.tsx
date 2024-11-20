"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calender";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";
import { DateRange } from "react-day-picker";

interface DateRangeProps {
  className?: React.HTMLAttributes<HTMLDivElement>;
  date: DateRange | undefined;
  setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
}

export function DatePickerWithRange({
  className,
  date,
  setDate,
}: DateRangeProps) {
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[180px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "yyyy-MM-dd")} -{" "}
                  {format(date.to, "yyyy-MM-dd")}
                </>
              ) : (
                format(date.from, "yyyy-MM-dd")
              )
            ) : (
              <span>Pick Rate Range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            classNames={{
              selected:
                "bg-teal-500 text-white hover:bg-teal-600 hover:text-white",
              //   today: 'bg-teal-500 text-white hover:bg-teal-600 hover:text-white',
              outside: "text-muted-foreground opacity-50",
              disabled: "text-muted-foreground opacity-50",
              range_middle:
                "aria-selected:bg-accent aria-selected:text-accent-foreground",
              day_hidden: "invisible",
              nav_button: "hover:bg-teal-100",
              table: "w-full border-collapse space-y-1",
              weekdays: "flex",
              weekday:
                "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
              week: "flex w-full mt-2",
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
