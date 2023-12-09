"use client";
import { useConfettiStore } from "@/hooks/user-confetti-store";
import { cn } from "@/lib/utils";
import MuxPlayer from "@mux/mux-player-react";
import axios from "axios";
import { Loader2, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface VideoPlayerProps {
  chapterId: string;
  title: string;
  courseId: string;
  nextChapterId?: string;
  playbackId: string;
  isLocked: boolean;
  completeOnEnd: boolean;
}

export const VideoPlayer = (props: VideoPlayerProps) => {
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();
  const confetti = useConfettiStore();

  const onEnd = async () => {
    try {
      if (props.completeOnEnd) {
        await axios.put(
          `/api/courses/${props.courseId}/chapters/${props.chapterId}/progress`,
          {
            isComplete: true,
          }
        );

        if (!props.nextChapterId) {
          confetti.onOpen();
        }

        toast.success("Progress Updated");
        router.refresh();

        if (props.nextChapterId) {
          router.push(
            `/courses/${props.courseId}/chapters/${props.nextChapterId}`
          );
        }
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="aspect-video relative">
      {!isReady && !props.isLocked && (
        <>
          <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
            <Loader2 className="h-8 w-8 animate-spin text-secondary" />
          </div>
        </>
      )}
      {props.isLocked && (
        <>
          <div className="absolute inset-0 items-center flex justify-center bg-slate-800 flex-col gap-y-2 text-white">
            <Lock className="h-8 w-8 text-center" />
            <p className="text-sm">This chapter is locked</p>
          </div>
        </>
      )}
      {!props.isLocked && (
        <MuxPlayer
          title={props.title}
          className={cn(!isReady && "hidden")}
          onCanPlay={() => setIsReady(true)}
          onEnded={onEnd}
          autoPlay
          playbackId={props.playbackId}
        />
      )}
    </div>
  );
};
