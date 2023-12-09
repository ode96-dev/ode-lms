import Link from "next/link";
import React from "react";
import { DataTable } from "./_components/_data-table";
import { columns } from "./_components/columns";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";

const Courses = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const courses = await db.course.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="p-6">
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={courses} />
      </div>
    </div>
  );
};

export default Courses;
