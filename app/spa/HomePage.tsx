import { FormExample } from "@/lib/components/FormExample";

export function HomePage() {
  return (
    <div className="w-screen h-screen overflow-y-auto flex items-center justify-center flex-col gap-4">
      <h1>SPA Home</h1>

      <FormExample />
    </div>
  );
}
