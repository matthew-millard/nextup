import { useDeleteTodoMutation } from "./mutations";

interface Props {
  id: string;
}

const DeleteTodo = ({ id }: Props) => {
  const [deleteTodo] = useDeleteTodoMutation();

  const deleteTodoAction = async (formData: FormData) => {
    const id = formData.get("id");
    await deleteTodo({ variables: { id } });
  };
  return (
    <form action={deleteTodoAction}>
      <input type="hidden" name="id" value={id} />
      <button type="submit">Delete</button>
    </form>
  );
};

export { DeleteTodo };
