import type { Metadata } from 'next'
import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import {DimensionsContextProvider} from "@/context/dimensionsContext/DimensionsContext";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'Navi',
  description: 'An internal wiki',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <DimensionsContextProvider>
        <body>{children}</body>
      </DimensionsContextProvider>
    </html>
  )
}
