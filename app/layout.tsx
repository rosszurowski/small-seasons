import React from "react"
import localFont from "@next/font/local"
import clsx from "clsx"
import "./index.css"

const quadraat = localFont({
  src: [
    {
      path: "./fonts/Quadraat-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Quadraat-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Quadraat-Bold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-quadraat",
  display: "swap",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={clsx("bg-light", quadraat.variable)}>
      <body>{children}</body>
    </html>
  )
}
