"use client";

import { useQuery } from "@tanstack/react-query";

// Separate the import into a function
const loadZetaSDK = async () => {
  const sdk = await import("@zetamarkets/zetax-sdk");
  return sdk;
};

export const useSdk = () => {
  const {
    data: zetaSDK,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["zetaSDK"],
    queryFn: loadZetaSDK,
    staleTime: Infinity,
  });

  return { zetaSDK, isLoading, error };
};
