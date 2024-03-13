import { useState, useEffect, useCallback } from "react";
import { ApiEndpoints } from "./ApiEndpoints";
import { useGetQuery } from "./ApiUtil";
import { produce } from "immer"; // Ensure correct import

// Now, the hook is generic over T for the data type and P for the query params type
export function useGenericQuery<T, P extends object>(
  endpoint: ApiEndpoints,
  initialParams: P // Use a generic type for initialParams
): QueryResult<T, P> {
  const [params, setParams] = useState<P>(initialParams);
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Function to mutate query parameters using Immer and immediately fetch data
  const fetch = useCallback(
    (recipe?: (draft: P) => void) => {
      // Use P here
      if (recipe) {
        setParams((currentParams) => produce(currentParams, recipe));
      } else {
        setLoading(true);
        useGetQuery<T, P>(endpoint, params) // Adjusted to use P
          .then(setData)
          .catch((err: Error) => {
            // Handle error
          })
          .finally(() => setLoading(false));
      }
    },
    [endpoint, params]
  );

  useEffect(() => {
    fetch(); // Trigger initial fetch on mount and params change
  }, [fetch]);

  // Function to mutate query parameters using Immer without immediate fetching
  const produceFetch = useCallback((recipe: (draft: P) => void) => {
    // Use P here
    setParams((currentParams) => produce(currentParams, recipe));
  }, []);

  return { data, loading, error, produceFetch, fetch };
}

interface QueryResult<T, P> {
  data: T | null;
  loading: boolean;
  error: string | null;
  produceFetch: (recipe: (draft: P) => void) => void; // Adjusted to use P
  fetch: (recipe?: (draft: P) => void) => void; // Adjusted to use P
}
