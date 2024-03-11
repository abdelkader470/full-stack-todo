import AddTodoForm from "@/components/AddTodoForm";
import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <main className="container">
      <ModeToggle />
      <AddTodoForm />
    </main>
  );
}
