import { useEffect, useState } from "react";

interface UseFetchProps {
  url: string;
  log?: boolean;
}

export default function useFetch<T>({ url, log }: UseFetchProps) {
  const [data, setData] = useState<T>();
  console.log(url);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (log) {
          console.log(data);
        }
        setData(data);
      });
  }, [url]);

  return data;
}
