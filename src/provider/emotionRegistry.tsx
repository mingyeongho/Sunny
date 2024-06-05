"use client";
import { CacheProvider, Global } from "@emotion/react";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { useState } from "react";
import { GlobalStyle } from "@/styles/globalStyle";

export default function RootStyleRegistry({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cache] = useState(() => {
    const cache = createCache({ key: "css" });
    cache.compat = true;
    return cache;
  });

  useServerInsertedHTML(() => {
    return (
      <style
        data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: Object.values(cache.inserted).join(" "),
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <Global styles={GlobalStyle} />
      {children}
    </CacheProvider>
  );
}
