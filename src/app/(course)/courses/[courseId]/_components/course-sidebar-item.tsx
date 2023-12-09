"use client";
import { cn } from "@/lib/utils";
import { CheckCircle, Lock, PlayCircle } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface CourseSidebarItemProps {
  id: string;
  label: string;
  isCompleted: boolean;
  courseId: string;
  isLocked: boolean;
}

const CourseSidebarItem = (props: CourseSidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const Icon = props.isLocked
    ? Lock
    : props.isCompleted
    ? CheckCircle
    : PlayCircle;

  const isActive = pathname?.includes(props.id);

  const onClick = () => {
    router.push(`/courses/${props.courseId}/chapters/${props.id}`);
  };
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
        isActive &&
          "text-slate-700 bg-slate-200/20 hover:bg-slate-200/20 hover:text-slate-700",
        props.isCompleted && "text-emerald-700 hover:text-emerald-700",
        props.isCompleted && isActive && "bg-emerald-200/20"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn(
            "text-slate-500",
            isActive && "text-slate-700",
            props.isCompleted && "text-emerald-700"
          )}
        />
        {props.label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-slate-700 h-full transition-all",
          isActive && "opacity-100",
          props.isCompleted && "border-emerald-700"
        )}
      ></div>
    </button>
  );
};

export default CourseSidebarItem;
