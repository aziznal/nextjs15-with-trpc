import { RouterRecord } from "@trpc/server/unstable-core-do-not-import";
import { createTRPCRouter, publicProcedure } from "./trpc";

const exampleRouter = {
  greet: publicProcedure.query(async () => {
    return "Greetings!";
  }),
} satisfies RouterRecord;

export const appRouter = createTRPCRouter({
  example: exampleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
