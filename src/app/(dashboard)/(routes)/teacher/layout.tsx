import { isTeacher } from "@/lib/teacher";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

type TeacherLayoutProps = {
  children: React.ReactNode;
};

const TeacherLayout = (props: TeacherLayoutProps) => {
  const { userId } = auth();
  if (!isTeacher(userId)) {
    return redirect("/");
  }
  return <div>{props.children}</div>;
};

export default TeacherLayout;
