import { RouterRecord } from "@trpc/server/unstable-core-do-not-import";
import { createTRPCRouter, publicProcedure } from "./trpc";
import { z } from "zod";

const exampleRouter = {
  greet: publicProcedure.query(async () => {
    return "Greetings!";
  }),

  createUser: publicProcedure
    .input(
      z.object({
        name: z.string().min(1).max(10),
        age: z.number().min(1).max(Number.MAX_SAFE_INTEGER),
      }),
    )
    .mutation(async (opts) => {
      console.log(opts.input);

      return { ...opts.input };
    }),
} satisfies RouterRecord;

export const appRouter = createTRPCRouter({
  example: exampleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
