"use client";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import React, { useMemo } from "react";

interface EditorProps {
  onChange: (value: string) => void;
  value: string;
}

const Editor = (props: EditorProps) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  return (
    <div className="bg-white">
      <ReactQuill theme="snow" value={props.value} onChange={props.onChange} />
    </div>
  );
};

export default Editor;
