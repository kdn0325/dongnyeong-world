import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dongnyeong world",
  description: "지속적인 지식의 여정📖",

  openGraph: {
    url: "https://www.dongnyeong.world",
    locale: "ko_KR",
    images: [
      {
        url: "https://github.com/kdn0325/dongnyeong-world/assets/91298955/af12996d-b79c-43f4-abf5-1b76684d4ac3",
        alt: "Profile",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <meta property="og:title" content={String(metadata.title)} />
        <meta
          property="og:description"
          content={String(metadata.description)}
        />
        <meta property="og:url" content={String(metadata.openGraph?.url)} />
        <meta
          property="og:image"
          content={String(metadata.openGraph?.images)}
        />
        <meta
          property="og:locale"
          content={String(metadata.openGraph?.locale)}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
