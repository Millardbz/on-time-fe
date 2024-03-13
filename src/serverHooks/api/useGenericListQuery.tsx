import { useState, useEffect, useCallback } from "react";
import { ApiEndpoints } from "../api/ApiEndpoints";
import { useGetListQuery } from "../api/ApiUtil";
import { IPaginatedList } from "../interfaces/PaginatedList";
import { produce } from "immer"; // Ensure correct import

// Adjust the QueryResult interface to include the generic type P for query parameters
interface QueryResult<T, P> {
  data: IPaginatedList<T> | null;
  loading: boolean;
  error: string | null;
  produceFetch: (recipe: (draft: P) => void) => void; // Use P here
  fetch: (recipe?: (draft: P) => void) => void; // Use P here
}

// Make the hook itself generic over both the data type T and the query params type P
export function useGenericListQuery<T, P extends object>(
  endpoint: ApiEndpoints,
  initialParams: P
): QueryResult<T, P> {
  const [params, setParams] = useState<P>(initialParams);
  const [data, setData] = useState<IPaginatedList<T> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Adjusted to use the generic type P for query parameters
  const fetch = useCallback(
    (recipe?: (draft: P) => void) => {
      if (recipe) {
        setParams((currentParams) => produce(currentParams, recipe));
      } else {
        setLoading(true);
        useGetListQuery<T, P>(endpoint, params)
          .then(setData)
          .catch((err) => setError(err.message))
          .finally(() => setLoading(false));
      }
    },
    [endpoint, params]
  );

  useEffect(() => {
    fetch(); // Trigger initial fetch on mount and params change
  }, [fetch]);

  const produceFetch = useCallback((recipe: (draft: P) => void) => {
    setParams((currentParams) => produce(currentParams, recipe));
  }, []);

  return { data, loading, error, produceFetch, fetch };
}
