"use client";

import { useEffect, useState } from "react";

export function useFetch<T>(url: string, cache: RequestCache = "force-cache") {
  const [data, setData] = useState<T | null>(null);
  
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const res = await fetch(url, { cache });
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const json = await res.json();
        if (isMounted) {
          setData(json);
        }
      } catch (err: any) {
        if (isMounted) {
          console.log(err.message || "Something went wrong");
        }
      } 
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url, cache]);

  return { data};
}








