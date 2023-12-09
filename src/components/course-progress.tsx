import React from "react";
import { Progress } from "./ui/progress";
import { cn } from "@/lib/utils";

interface CourseProgressProps {
  value: number;
  variant?: "default" | "success";
  size?: "default" | "sm";
}

const colorByVariant = {
  default: "text-sky-700",
  success: "text-emerald-700",
};

const sizeByVariant = {
  default: "text-sm",
  sm: "text-xs",
};

const CourseProgress = (props: CourseProgressProps) => {
  return (
    <div>
      <Progress variant={props.variant} className="h-2" value={props.value} />
      <p
        className={cn(
          "font-medium mt-2 text-sky-700",
          colorByVariant[props.variant || "default"],
          sizeByVariant[props.size || "default"]
        )}
      >
        {Math.round(props.value)}% Complete
      </p>
    </div>
  );
};

export default CourseProgress;
