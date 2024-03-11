"use client";
import { useGetTodoListQuery } from "@/serverHooks/util/useGetTodoListQuery";
import { useGetTodoListsQuery } from "@/serverHooks/util/useGetTodoListsQuery";

export default function Home() {
  const { data, loading, error } = useGetTodoListQuery({
    listId: 1,
    pageNumber: 1,
    pageSize: 1,
  });

  const { data: todoLists } = useGetTodoListsQuery();

  console.log("aAAAA", error);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Todo Lists</h1>
        {data?.items.map((todo) => (
          <div key={todo.id}>{todo.title}</div>
        ))}
      </div>
      <div>
        <h1>Todo Lists</h1>
        {todoLists && (
          <div>
            {todoLists.lists.map((list) => (
              <div key={list.id}>{list.colour}</div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
