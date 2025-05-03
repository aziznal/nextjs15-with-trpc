"use client";

import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "../trpc/react";

export const Greeting: React.FC = () => {
  const trpc = useTRPC();
  const greetingQuery = useQuery(trpc.example.greet.queryOptions());

  if (greetingQuery.isLoading) return <div>Loading</div>;

  return <div>{greetingQuery.data}</div>;
};
