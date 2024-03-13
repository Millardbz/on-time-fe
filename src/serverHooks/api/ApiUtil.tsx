"use client";
import { ApiEndpoints } from "./ApiEndpoints";
import { IPaginatedList } from "../interfaces/PaginatedList";

export async function useGetQuery<T, P = Record<string, unknown>>(
  endpointKey: ApiEndpoints,
  params?: P,
  token?: string // Optional token parameter for authenticated requests
): Promise<T> {
  // Only use the values of the parameters
  const queryString = params ? Object.values(params).join("/") : "";
  const endpointUrl = endpointKey;
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${endpointUrl}${queryString}`, {
    method: "GET",
    headers,
  });

  if (!response.ok) {
    let errorResponse;
    try {
      const textResponse = await response.text(); // Get the response as text
      errorResponse = JSON.parse(textResponse); // Parse the response as JSON
    } catch (error) {
      throw new Error("The server returned an invalid JSON response.");
    }
    throw errorResponse;
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
    let errorResponse;
    try {
      const textResponse = await response.text(); // Get the response as text
      errorResponse = JSON.parse(textResponse); // Parse the response as JSON
    } catch (error) {
      throw new Error("The server returned an invalid JSON response.");
    }
    throw errorResponse;
  }
  return response.json();
}

export async function useCommand<T>(
  endpoint: string,
  method: "POST" | "PUT" | "DELETE",
  body: T
): Promise<void> {
  // Mock response
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // simulate a successful request
      resolve();
      // or simulate an error
      // reject(new Error("Simulated fetch error"));
    }, 1000);
  });
}
