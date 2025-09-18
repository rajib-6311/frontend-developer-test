
// export const useFetch = async()=>{
//     try{
//        const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
//         cache: 'force-cache'
//        });

//        if(!response.ok){
//         throw new Error(`HTTP error! status: ${response.status}`)
//        }

//        const data = await response.json();
//        return data;

//     }catch(err){
//         console.log('Error fetching posts data', err);
//         return []
//     }
    
// }

// lib/useFetch.ts
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








