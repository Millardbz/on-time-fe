"use client";
import { IPaginatedList } from "../interfaces/PaginatedList";
import { ApiEndpoints } from "./ApiEndpoints";

export async function useGetQuery<T, P>(
  endpointKey: ApiEndpoints, // Change the type to accept the keys of the enum
  params?: P
): Promise<T> {
  const queryString = new URLSearchParams(params as any).toString();
  const endpointUrl = endpointKey;
  const response = await fetch(`${endpointUrl}?${queryString}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Include authorization header if needed
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
}

export async function useGetListQuery<T, P>(
  endpointKey: ApiEndpoints, // Correct type declaration
  params: P
): Promise<IPaginatedList<T>> {
  const queryString = new URLSearchParams(params as any).toString();
  const endpointUrl = endpointKey; // Access enum value directly
  const response = await fetch(`${endpointUrl}?${queryString}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Include authorization header if needed
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
}
