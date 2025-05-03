"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FormEvent, useState } from "react";
import { useTRPC } from "../trpc/react";
import { useMutation } from "@tanstack/react-query";

export const FormExample: React.FC<{ className?: string }> = (props) => {
  const trpc = useTRPC();
  const createUserMutation = useMutation(
    trpc.example.createUser.mutationOptions(),
  );

  const [name, setName] = useState<string>();
  const [age, setAge] = useState<number>();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (name === undefined || age === undefined) return;

    createUserMutation.mutate({
      name,
      age,
    });
  };

  return (
    <div className={cn(props.className)}>
      <form
        className="flex flex-col gap-4 mb-12"
        onSubmit={(e) => handleSubmit(e)}
      >
        <Input placeholder="name" onChange={(e) => setName(e.target.value)} />
        <Input placeholder="age" onChange={(e) => setAge(+e.target.value)} />

        <Button type="submit" className="self-end" onClick={handleSubmit}>
          Submit
        </Button>
      </form>

      {createUserMutation.isError && (
        <pre className="text-red-400">
          {JSON.stringify(
            createUserMutation.error.data?.zodError?.fieldErrors,
            null,
            2,
          )}
        </pre>
      )}

      {createUserMutation.isSuccess && (
        <pre className="text-green-600">
          {JSON.stringify(createUserMutation.data, null, 2)}
        </pre>
      )}
    </div>
  );
};
