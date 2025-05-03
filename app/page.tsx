import { Greeting } from "@/lib/components/Greeting";
import { HydrateClient } from "@/lib/trpc/server";

export default function Home() {
  return (
    <HydrateClient>
      <div className="w-screen h-screen overflow-y-auto flex items-center justify-center flex-col gap-4">
        <h1 className="text-4xl">Hello World!</h1>

        <Greeting />
      </div>
    </HydrateClient>
  );
}
