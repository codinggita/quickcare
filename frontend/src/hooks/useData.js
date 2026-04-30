import { useState, useEffect, useCallback, useRef } from 'react';
import api from '../services/api';

/**
 * useFetch — Generic data-fetching hook backed by the centralized Axios instance.
 *
 * @param {string} url - The endpoint to fetch (relative to the Axios baseURL).
 * @param {object} [params] - Optional query parameters.
 * @param {boolean} [immediate=true] - If false, the fetch won't run on mount; call `refetch()` manually.
 *
 * Usage:
 *   const { data, isLoading, error, refetch } = useFetch('/doctors', { specialty: 'cardiology' });
 */
export const useFetch = (url, params = {}, immediate = true) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(immediate);
  const [error, setError] = useState(null);

  // Use a ref to hold an AbortController so we can cancel in-flight requests
  const abortControllerRef = useRef(null);

  const fetchData = useCallback(async () => {
    // Cancel any pending request before starting a new one
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    setIsLoading(true);
    setError(null);

    try {
      const response = await api.get(url, {
        params,
        signal: abortControllerRef.current.signal,
      });
      setData(response.data);
    } catch (err) {
      // Ignore abort errors — they are intentional
      if (err.name !== 'CanceledError' && err.name !== 'AbortError') {
        setError(err.response?.data?.message || err.message || 'Failed to fetch data.');
      }
    } finally {
      setIsLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, JSON.stringify(params)]);

  useEffect(() => {
    if (immediate) {
      fetchData();
    }

    // Cleanup: abort on unmount
    return () => {
      abortControllerRef.current?.abort();
    };
  }, [fetchData, immediate]);

  return { data, isLoading, error, refetch: fetchData };
};

/**
 * useDebounce — Debounces a value by a given delay.
 *
 * @param {any} value - The value to debounce.
 * @param {number} [delay=400] - Delay in milliseconds.
 *
 * Usage:
 *   const debouncedSearch = useDebounce(searchTerm, 400);
 */
export const useDebounce = (value, delay = 400) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};
