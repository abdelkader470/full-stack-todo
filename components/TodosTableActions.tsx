"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Pen, Trash } from "lucide-react";
import { deleteTodoAction } from "@/actions/todo.actions";
import Spinner from "./Spinner";
const TodosTableActions = ({ id }: { id: string }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Button size={"icon"}>
        <Pen size={18} />
      </Button>
      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={async () => {
          setIsLoading(true);
          await deleteTodoAction({ id });
          setIsLoading(false);
        }}
      >
        {isLoading ? <Spinner /> : <Trash size={18} />}
      </Button>
    </>
  );
};

export default TodosTableActions;
