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
  title?: string;
}

export const useGetTodoListQuery = (params: GetTodoItemsQueryParams) => {
  const [data, setData] = useState<IPaginatedList<ITodoItem> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);

    // Now just pass the key of the endpoint you want to use
    useGetListQuery<ITodoItem, GetTodoItemsQueryParams>(
      ApiEndpoints.todoItems,
      params
    )
      .then(setData)
      .catch((err: Error) => {
        const errorMessage = err.message;
        // Optionally, you can parse the message to extract the status and body
        const match = /HTTP error! Status: (\d+), Body: (.*)/.exec(
          errorMessage
        );
        if (match) {
          const [, status, body] = match;
          console.error(`Error ${status}: ${body}`);
          // You might want to parse JSON body if your backend returns JSON
          try {
            const errorBody = JSON.parse(body);
            setError(
              errorBody.errors || errorBody.message || "Unknown error occurred"
            );
          } catch (jsonError) {
            setError("Failed to parse server response.");
          }
        } else {
          setError("An unexpected error occurred.");
        }
      });
  }, [JSON.stringify(params)]); // Using JSON.stringify to ensure dependency stability

  return { data, loading, error };
};
