"use client";
import { Category } from "@prisma/client";
import React from "react";
import {
  FcEngineering,
  FcFilmReel,
  FcMultipleDevices,
  FcMusic,
  FcOldTimeCamera,
  FcSalesPerformance,
} from "react-icons/fc";
import { IconType } from "react-icons";
import CategoryItem from "./category-item";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  "Computer Science": FcMultipleDevices,
  Music: FcMusic,
  Mathematics: FcEngineering,
  Accounting: FcSalesPerformance,
  Religion: FcFilmReel,
  History: FcOldTimeCamera,
};

const Categories = (props: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {props.items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          Icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  );
};

export default Categories;
