import RootStyleRegistry from "@/provider/emotionRegistry";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "ClearSky",
  description: "화창한 날씨를 만나보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootStyleRegistry>
      <html lang="kr">
        <body className={notoSansKr.className}>{children}</body>
      </html>
    </RootStyleRegistry>
  );
}
