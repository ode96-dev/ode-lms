"use client";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import React, { useMemo } from "react";

interface PreviewEditorProps {
  value: string;
}

const PreviewEditor = (props: PreviewEditorProps) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  return <ReactQuill theme="bubble" value={props.value} readOnly />;
};

export default PreviewEditor;
