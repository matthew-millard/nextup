import { Input } from "@shared/input/input.tsx";
import { useAddTodoMutation } from "./mutations";

const AddTodo = () => {
  const [addTodo] = useAddTodoMutation();

  const addTodoAction = async (formData: FormData) => {
    const title = formData.get("title");
    await addTodo({ variables: { title } });
  };

  return (
    <form action={addTodoAction}>
      <Input type="text" name="title" />
      <button type="submit">Add</button>
    </form>
  );
};

export { AddTodo };
