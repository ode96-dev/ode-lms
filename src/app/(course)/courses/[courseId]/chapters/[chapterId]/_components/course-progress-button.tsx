"use client";
import { Button } from "@/components/ui/button";
import { useConfettiStore } from "@/hooks/user-confetti-store";
import axios from "axios";
import { CheckCircle, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface CourseProgressButtonProps {
  isCompleted?: boolean;
  nextChapterId?: string;
  chapterId: string;
  courseId: string;
}

const CourseProgressButton = (props: CourseProgressButtonProps) => {
  const router = useRouter();
  const confetti = useConfettiStore();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      await axios.put(
        `/api/courses/${props.courseId}/chapters/${props.chapterId}/progress`,
        {
          isComplete: !props.isCompleted,
        }
      );

      if (!props.isCompleted && !props.nextChapterId) {
        confetti.onOpen();
      }

      if (!props.isCompleted && props.nextChapterId) {
        router.push(
          `/courses/${props.courseId}/chapters/${props.nextChapterId}`
        );
      }

      toast.success("Progress updated");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };
  const Icon = props.isCompleted ? XCircle : CheckCircle;
  return (
    <Button
      onClick={onClick}
      disabled={isLoading}
      className="w-full md:w-auto"
      type="button"
      variant={props.isCompleted ? "outline" : "success"}
    >
      {props.isCompleted ? "Not completed" : "Mark as completed"}
      <Icon className="h-4 w-4 ml-2" />
    </Button>
  );
};

export default CourseProgressButton;
