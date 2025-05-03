"use client";

import nextDynamic from "next/dynamic";

const App = nextDynamic(() => import("./app"), { ssr: false });

export const dynamic = "force-static";

export default function Page() {
  return <App />;
}
