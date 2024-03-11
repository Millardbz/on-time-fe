"use client";
import { ApiEndpoints } from "./ApiEndpoints";
import { IPaginatedList } from "../interfaces/PaginatedList";

export async function useGetQuery<T, P = Record<string, unknown>>(
  endpointKey: ApiEndpoints,
  params?: P,
  token?: string // Optional token parameter for authenticated requests
): Promise<T> {
  const queryString = new URLSearchParams(params as any).toString();
  const endpointUrl = endpointKey;
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  const response = await fetch(`${endpointUrl}?${queryString}`, {
    method: "GET",
    headers,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `HTTP error! Status: ${response.status}, Body: ${errorText}`
    );
  }

  return response.json();
}

export async function useGetListQuery<T, P = Record<string, unknown>>(
  endpointKey: ApiEndpoints,
  params: P,
  token?: string // Optional token parameter for authenticated requests
): Promise<IPaginatedList<T>> {
  const queryString = new URLSearchParams(params as any).toString();
  const endpointUrl = endpointKey;
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  const response = await fetch(`${endpointUrl}?${queryString}`, {
    method: "GET",
    headers,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `HTTP error! Status: ${response.status}, Body: ${errorText}`
    );
  }

  return response.json();
}
