import React from "react";
import "./index.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-light">
      <body>{children}</body>
    </html>
  );
}
