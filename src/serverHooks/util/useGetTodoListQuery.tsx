"use client";
import { useState, useEffect } from "react";
import { useGetListQuery } from "../api/ApiUtil";
import { ITodoItem } from "../dtos/ITodoItem";
import { IPaginatedList } from "../interfaces/PaginatedList";
import { ApiEndpoints } from "../api/ApiEndpoints";

export interface GetTodoItemsQueryParams {
  listId: number;
  pageNumber: number;
  pageSize: number;
}

export const useGetTodoListQuery = (params: GetTodoItemsQueryParams) => {
  const [data, setData] = useState<IPaginatedList<ITodoItem> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);

    // Now just pass the key of the endpoint you want to use
    useGetListQuery<ITodoItem, GetTodoItemsQueryParams>(
      ApiEndpoints.todoItems,
      params
    )
      .then(setData)
      .catch((error) =>
        setError(error instanceof Error ? error : new Error(String(error)))
      )
      .finally(() => setLoading(false));
  }, [JSON.stringify(params)]); // Using JSON.stringify to ensure dependency stability

  return { data, loading, error };
};
