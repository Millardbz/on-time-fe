"use client";
import { useState, useEffect } from "react";
import { ITodoList } from "../dtos/ITodoList";
import { useGetQuery } from "../api/ApiUtil";
import { ApiEndpoints } from "../api/ApiEndpoints";

export interface IUsegetTodoListsQuery {}

export const useGetTodoListsQuery = (params?: IUsegetTodoListsQuery) => {
  const [data, setData] = useState<ITodoList | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);

    // Now just pass the key of the endpoint you want to use
    useGetQuery<ITodoList, IUsegetTodoListsQuery>(ApiEndpoints.todoLists)
      .then(setData)
      .catch((error) =>
        setError(error instanceof Error ? error : new Error(String(error)))
      )
      .finally(() => setLoading(false));
  }, [JSON.stringify(params)]); // Using JSON.stringify to ensure dependency stability

  return { data, loading, error };
};
