"use client";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { useState } from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Accordion(props: Props) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const { title, children } = props;

  return (
    <div className="border-t pt-6">
      <button
        onClick={() => setIsDetailsOpen(!isDetailsOpen)}
        className="flex items-center justify-between w-full text-left"
      >
        <span className="text-lg font-medium">{title}</span>
        {isDetailsOpen ? (
          <ArrowUpOutlined className="w-5 h-5" />
        ) : (
          <ArrowDownOutlined className="w-5 h-5" />
        )}
      </button>
      {isDetailsOpen && <div className={"mt-4"}>{children}</div>}
    </div>
  );
}
