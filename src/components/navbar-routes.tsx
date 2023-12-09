"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import SearchInput from "./search-input";
import { isTeacher } from "@/lib/teacher";

const NavbarRoutes = () => {
  const { userId } = useAuth();
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.startsWith("/courses");
  const isSearchPage = pathname === "/search";

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      <div className="flex gap-x-2 ml-auto">
        {isTeacherPage || isPlayerPage ? (
          <Link href="/">
            <button>
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </button>
          </Link>
        ) : isTeacher(userId) ? (
          <Link href="/teacher/courses">
            <button>Teacher Mode</button>
          </Link>
        ) : null}
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
};

export default NavbarRoutes;
