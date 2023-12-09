import { LucideIcon } from "lucide-react";
import React from "react";

interface Props {
  Icon: LucideIcon;
  label: string;
  numberOfItems: number;
}

const InfoCard = (props: Props) => {
  return (
    <div className="border rounded-md flex items-center gap-x-2 p-3">
      <props.Icon />
      <div>
        <p className="font-medium">{props.label}</p>
        <p className="text-gray-500 text-sm">
          {props.numberOfItems}{" "}
          {props.numberOfItems === 1 ? "Course" : "Courses"}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
