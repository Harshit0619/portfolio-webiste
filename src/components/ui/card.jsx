// src/components/ui/card.jsx
import React from "react";

export function Card({ children, className }) {
  return (
    <div className={`rounded-xl border border-gray-700 p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}
