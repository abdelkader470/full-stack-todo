"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Pen, Trash } from "lucide-react";
import { deleteTodoAction } from "@/actions/todo.actions";
import Spinner from "./Spinner";
import EditTodoForm from "./EditTodoForm";
import { ITodo } from "@/interfaces";
const TodosTableActions = ({ todo }: { todo: ITodo }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <EditTodoForm todo={todo} />

      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={async () => {
          setIsLoading(true);
          await deleteTodoAction({ id: todo?.id });
          setIsLoading(false);
        }}
      >
        {isLoading ? <Spinner /> : <Trash size={18} />}
      </Button>
    </>
  );
};

export default TodosTableActions;
